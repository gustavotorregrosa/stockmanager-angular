import { Component, OnInit, Input, Inject } from '@angular/core';
import {PainelComponent} from '../categorias/painel/painel.component'

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  constructor(@Inject(PainelComponent) private parent: PainelComponent) { }


  ngOnInit(): void {

  }

  selecionaPagina = (p, e: Event) => {
    e.preventDefault()
    this.parent.paginaAtiva = p
  }

  exibeBarra = () => this.parent.qtdePaginas() > 1
  
  habilitaPrimeiro = () => this.parent.paginaAtiva > 1 

  habilitaUltimo = () => this.parent.paginaAtiva < this.parent.qtdePaginas()
  
  decrementaPagina = (e: Event) => {
    e.preventDefault()
    if(this.parent.paginaAtiva <= 1){
      return false
    }
    this.parent.paginaAtiva--
  }

  incrementaPagina = (e: Event) => {
    e.preventDefault()
    if(this.parent.paginaAtiva >= this.parent.qtdePaginas()){
      return false
    }
    this.parent.paginaAtiva++
  }

  paginas = () => {
    let paginasArray: Array<any> = []

    for (let index = 1; index <= this.parent.qtdePaginas(); index++) {
        let classe = "waves-effect"
        if(index == this.parent.paginaAtiva){
          classe = "active"
        }
        paginasArray.push({
          pagina: index,
          classe
        })
    }

    return paginasArray
  }

}
