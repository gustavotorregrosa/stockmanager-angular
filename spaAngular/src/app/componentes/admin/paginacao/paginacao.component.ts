import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  constructor() { }

  @Input() qtdePaginas: number
  public paginaAtiva: number = 5

  ngOnInit(): void {}


  selecionaPagina = (p, e: Event) => {
    e.preventDefault()
    this.paginaAtiva = p
  }

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
