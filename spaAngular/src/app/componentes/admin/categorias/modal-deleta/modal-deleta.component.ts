import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuxiliaresService } from '../../../../auxiliares.service';
import { PainelComponent } from '../painel/painel.component';
import M from 'materialize-css';


@Component({
  selector: 'app-modal-deleta-categoria',
  templateUrl: './modal-deleta.component.html',
  styleUrls: ['./modal-deleta.component.css']
})
export class ModalDeletaComponent implements OnInit {

  constructor(@Inject(PainelComponent) private parent: PainelComponent, private auxiliar: AuxiliaresService) { }

  loader: boolean = false
  elem: any = null
  instance: any = null
  @Input() id: number = 0
  @Input() nome: string = ""

  ngOnInit(): void {
    this.elem = document.getElementById('modal-deleta-categoria')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
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

  deletar = (e: Event) => {
    e.preventDefault()
    this.loader = true
    this.deletaCategoria(this.id)
  }

  deletaCategoria = id => {
    let myHeaders = new Headers
    myHeaders.set("Content-Type", "application/json")
    let opcoes = {
        url: 'categorias/deletar/' + id,
        method: 'delete',
        headers: myHeaders
    }
    setTimeout(() => {
        this.auxiliar.jwtFetch(opcoes.url, opcoes).then((r: any) => {
            M.toast({ html: r.mensagem })
            this.fechaModal()
            this.parent.getTodasCategorias()

        }).catch(r => {
            M.toast({ html: r.conteudo.mensagem })
            this.fechaModal()
        })
    }, 1000);
}


}
