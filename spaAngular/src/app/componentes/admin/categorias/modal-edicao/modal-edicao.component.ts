import { Component, OnInit, Input, Inject } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../../auxiliares.service';
import {PainelComponent} from '../painel/painel.component'

@Component({
  selector: 'app-modal-edicao-categoria',
  templateUrl: './modal-edicao.component.html',
  styleUrls: ['./modal-edicao.component.css']
})

export class ModalEdicaoComponent implements OnInit {

  loader: boolean = false
  // categoria: any

  elem: any = null
  instance: any = null
  @Input() id: number = 0
  @Input() nome: string = ""

  constructor(@Inject(PainelComponent) private parent: PainelComponent, private auxiliar: AuxiliaresService) { }

  ngOnInit(): void {
    this.elem = document.getElementById('modal-edita-categoria')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }

  alteraCategoria = (id: number, nome: string) => {
    this.loader = true
    let myHeaders = new Headers
    myHeaders.set("Content-Type", "application/json")
    let opcoes = {
      url: 'categorias/editar',
      method: 'post',
      body: JSON.stringify({
        id,
        nome
      }),
      headers: myHeaders
    }
  
    setTimeout(() => {
      this.auxiliar.jwtFetch(opcoes.url, opcoes).then((r:any) => {
        M.toast({ html: r.mensagem })
        this.fechaModal()
        this.parent.getTodasCategorias()
      }).catch(r => {
        M.toast({ html: r.conteudo.mensagem })
        this.fechaModal()
      })
    }, 1000);

  }

  abreModal = (categoria) => {
    this.id = categoria.id
    this.nome = categoria.nome
    this.instance.open()
    setTimeout(() => {
      M.updateTextFields()
    }, 100)

  }

  fechaModal = () => {
    this.instance.close()
  }

  salvar = (e: Event) => {
    e.preventDefault()
    this.loader = true
    this.alteraCategoria(this.id, this.nome)
  }


}
