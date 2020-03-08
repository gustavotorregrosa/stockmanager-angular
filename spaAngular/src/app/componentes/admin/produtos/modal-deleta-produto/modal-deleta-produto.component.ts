import { Component, OnInit, Inject } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../../auxiliares.service';
import { PainelComponent } from '../painel/painel.component';

@Component({
  selector: 'app-modal-deleta-produto',
  templateUrl: './modal-deleta-produto.component.html',
  styleUrls: ['./modal-deleta-produto.component.css']
})
export class ModalDeletaProdutoComponent implements OnInit {

  constructor(@Inject(PainelComponent) private parent: PainelComponent, private auxiliar: AuxiliaresService) { }

  elem: any
  instance: any
  loader: boolean = false
  nome: string
  id: number

  ngOnInit(): void {
    this.elem = document.getElementById('modal-deleta-produto')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
        
      }
    })
  }

  abreModal = (produto) => {
    this.id = produto.id
    this.nome = produto.nome
    this.instance.open()
  }

  fechaModal = () => {
    this.instance.close()
  }

  deletar = (e: Event) => {
    e.preventDefault()
    this.loader = true
    let myHeaders = new Headers
    myHeaders.set("Content-Type", "application/json")
    let opcoes = {
        url: 'produtos/deletar/' + this.id,
        method: 'delete',
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

}
