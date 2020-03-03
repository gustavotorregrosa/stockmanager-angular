import { Component, OnInit, Inject } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../../auxiliares.service';
import {PainelComponent} from '../painel/painel.component'


@Component({
  selector: 'app-modal-criacao-categoria',
  templateUrl: './modal-criacao.component.html',
  styleUrls: ['./modal-criacao.component.css']
})
export class ModalCriacaoComponent implements OnInit {

  constructor(@Inject(PainelComponent) private parent: PainelComponent, private auxiliar: AuxiliaresService) { }

  loader: boolean = false
  elem: any = null
  instance: any = null
  public nome: string = ""

  ngOnInit(): void {
    this.elem = document.getElementById('modal-nova-categoria')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }

  abreModal = () => {
    this.nome = ""
    this.instance.open()
    setTimeout(() => {
      M.updateTextFields()
    }, 100)

  }

  fechaModal = () => {
    this.instance.close()
  }
  
  salvarCategoria = (nome: string) => {
    this.loader = true
    let myHeaders = new Headers
    myHeaders.set("Content-Type", "application/json")
    let opcoes = {
      url: 'categorias/salvar',
      method: 'post',
      body: JSON.stringify({
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


  salvar = (e: Event) => {
    e.preventDefault()
    this.loader = true
    this.salvarCategoria(this.nome)
  }

}
