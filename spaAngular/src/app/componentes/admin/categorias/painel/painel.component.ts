import { Component, OnInit, ViewChild, Output } from '@angular/core';
import {BarraBuscaComponent as BarraBusca} from '../../barra-busca/barra-busca.component';
import {PaginacaoComponent as Paginacao} from '../../paginacao/paginacao.component';

@Component({
  selector: 'app-categorias-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @ViewChild(BarraBusca) barraBusca: BarraBusca;
  @ViewChild(Paginacao) barraPaginacao: Paginacao;
  @Output() qtdePaginas: number = 9

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      console.log("pagina ativa...")
      console.log(this.barraPaginacao.paginaAtiva)
     
    }, 1000)
  }
  

}
