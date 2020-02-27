import { Component, OnInit, ViewChild, Output } from '@angular/core';
import {BarraBuscaComponent as BarraBusca} from '../../barra-busca/barra-busca.component';

@Component({
  selector: 'app-categorias-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @ViewChild(BarraBusca) barraBusca: BarraBusca;
  @Output() qtdePaginas: number = 9
  @Output() paginaAtiva: number = 5

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      console.log("pagina ativa...")
      console.log(this.paginaAtiva)
     
    }, 1000)
  }
  

}
