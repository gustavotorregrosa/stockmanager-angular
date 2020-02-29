import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  constructor() { }

  public qtdePaginas: number
  public paginaAtiva: number = 1

  ngOnInit(): void {}


  selecionaPagina = (p, e: Event) => {
    e.preventDefault()
    this.paginaAtiva = p
  }

  reset = () => {
    this.paginaAtiva = 1
    this.qtdePaginas = 1
  }

  exibeBarra = () => this.qtdePaginas > 1

  habilitaPrimeiro = () => this.paginaAtiva > 1 

  habilitaUltimo = () => this.paginaAtiva < this.qtdePaginas
  
  decrementaPagina = (e: Event) => {
    e.preventDefault()
    if(this.paginaAtiva <= 1){
      return false
    }
    this.paginaAtiva--
  }

  incrementaPagina = (e: Event) => {
    e.preventDefault()
    if(this.paginaAtiva >= this.qtdePaginas){
      return false
    }
    this.paginaAtiva++
  }

  paginas = () => {
    let paginasArray: Array<any> = []

    for (let index = 1; index <= this.qtdePaginas; index++) {
        let classe = "waves-effect"
        if(index == this.paginaAtiva){
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
