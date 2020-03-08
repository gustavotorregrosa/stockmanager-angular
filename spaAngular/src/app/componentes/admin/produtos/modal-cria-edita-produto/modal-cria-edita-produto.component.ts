import { Component, OnInit, Inject, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../../auxiliares.service';
import { PainelComponent } from '../painel/painel.component';
import { SelectCategoriasComponent } from '../select-categorias/select-categorias.component';


@Component({
  selector: 'app-modal-cria-edita-produto',
  templateUrl: './modal-cria-edita-produto.component.html',
  styleUrls: ['./modal-cria-edita-produto.component.css']
})

export class ModalCriaEditaProdutoComponent implements OnInit, AfterViewInit {

  loader: boolean = false
  elem: any = null
  instance: any = null
  nFileInput: any = null
  imagem: any = null
  nomeImagem: string = null
  idProduto: number = null
  nForm: any = null
  loaderimagem: boolean = false
  exibeOptTodosCat: boolean = false
  @Input() descricao: string = null
  @Input() nome: string = null
  @Input() listaCategorias: any = []
  @ViewChild(SelectCategoriasComponent) selectCategorias: SelectCategoriasComponent
  @ViewChild("inputFile") fileInput: ElementRef;
  @ViewChild("meuForm") meuForm: ElementRef;


  constructor(@Inject(PainelComponent) private parent: PainelComponent, private auxiliar: AuxiliaresService) { }

  ngOnInit(): void {
    this.elem = document.getElementById('modal-novo-produto')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false,
        this.limpaCampos()
      }
    })
  }

  ngAfterViewInit(): void {
    this.nFileInput = this.fileInput.nativeElement
    this.nForm = this.meuForm.nativeElement
  }

  carregarArquivo = (e: any) => {
    let img = e.target.files[0]
    let nomeImagem = img.name
    let quadro: any = document.getElementById("quadro-img")
    this.auxiliar.carregaImagem(img, quadro)
    this.auxiliar.converteBase64(img).then((imagem: any) => {
        imagem = imagem.split('base64,')[1]
        this.nomeImagem = nomeImagem
        this.imagem = imagem
    })
  }

  abreModal = (produto: any = null) => {
    if(produto){
      this.idProduto = produto.id
      this.nome = produto.nome
      this.descricao = produto.descricao
      this.selectCategorias.atualizaExibicao(produto.categoria)
      if(produto.id){
        this.nomeImagem = produto.imagem
        this.exibeImagem()
      }

    }
    this.instance.open()
    this.selectCategorias.atualizaExibicao()
    setTimeout(() => {
      M.updateTextFields()
    }, 100)
  }

  getExtensaoMime = str => {
    let extensao = str.split('.')[1]
    if (extensao == "jpg") {
        extensao = "jpeg"
    }
    return extensao
}


  exibeImagem = () => {
    let quadro: any
    if(this.nomeImagem) {
        this.loaderimagem = true
        this.auxiliar.jwtFetch("produtos/imagem/" + this.nomeImagem).then((r: any) => {
            let extensao = this.getExtensaoMime(this.nomeImagem)
            const imagem = "data:image/" + extensao + ";base64," + r.imagem64
            this.loaderimagem = false
            setTimeout(() => {
              quadro = document.getElementById("quadro-img")
              quadro.src = imagem
            }, 50)
       
        })
    } else {
      quadro = document.getElementById("quadro-img")
      quadro.src = "assets/sem-imagem.jpg"
    }

}

  salvar = (e: Event) => {
    e.preventDefault()

    if(!this.nome){
      M.toast({ html: 'Escolha um nome para o produto'})
      return false
    }

    if(!this.selectCategorias.categoriaSelecionada){
      M.toast({ html: 'Pelo menos uma categoria deve ser escolhida'})
      return false
    }

    this.loader = true

    let produto = {
      id: this.idProduto,
      nomeImagem: this.nomeImagem,
      imagem: this.imagem,
      nome: this.nome,
      categoria: this.selectCategorias.categoriaSelecionada,
      descricao: this.descricao
    }   

    let myHeaders = new Headers
    myHeaders.set("Content-Type", "application/json")
    let opcoes = {
        url: 'produtos/salvar',
        method: 'post',
        body: JSON.stringify(produto),
        headers: myHeaders
    }
    setTimeout(() => {
        this.auxiliar.jwtFetch(opcoes.url, opcoes).then((r: any) => {
            M.toast({ html: r.mensagem })
            this.parent.getTodosProdutos()
            this.fechaModal()
        }).catch(r => {
            M.toast({ html: r.conteudo.mensagem })
            this.fechaModal()
        })
    }, 1000);

  }


  fechaModal = () => {
    this.instance.close()
  }

  limpaCampos = () => {
    this.imagem = null
    this.nomeImagem = null
    this.idProduto = null
    this.descricao = null
    this.nome = null
    const quadro: any = document.getElementById("quadro-img")
    quadro.src = ""
    this.nForm.reset()
  }

}
