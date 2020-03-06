import { Component, OnInit, Inject, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../../auxiliares.service';
import {PainelComponent} from '../painel/painel.component';
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
  @Input() listaCategorias: any = []
  @ViewChild(SelectCategoriasComponent) selectCategorias: SelectCategoriasComponent
  @ViewChild("inputFile") fileInput: ElementRef;


  constructor(@Inject(PainelComponent) private parent: PainelComponent, private auxiliar: AuxiliaresService) { }

  ngOnInit(): void {
    this.elem = document.getElementById('modal-novo-produto')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }

  ngAfterViewInit(): void {
    this.nFileInput = this.fileInput.nativeElement;
  }

  carregarArquivo = (e: any) => {
    const img = e.target.files[0]
    let nomeImagem = img.name
    const quadro = document.getElementById("quadro-img")
    this.auxiliar.carregaImagem(img, quadro)
    this.auxiliar.converteBase64(img).then((imagem: any) => {
        imagem = imagem.split('base64,')[1]
        this.nomeImagem = nomeImagem
        this.imagem = imagem
    })
  }

  abreModal = (produto = null) => {
    this.instance.open()
    this.selectCategorias.atualizaExibicao()
    setTimeout(() => {
      M.updateTextFields()
    }, 100)
  }

  fechaModal = () => {
    this.instance.close()
  }


}
