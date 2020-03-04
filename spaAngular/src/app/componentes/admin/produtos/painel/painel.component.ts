import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { BarraBuscaComponent as BarraBusca } from '../../barra-busca/barra-busca.component';
import { PaginacaoProdutosComponent as Paginacao } from '../paginacao/paginacao.component';

@Component({
  selector: 'app-painel-produtos',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  @ViewChild(BarraBusca) barraBusca: BarraBusca

  public paginaAtiva: number = 1

  constructor() { }

  public loader: boolean = true

  ngOnInit(): void {
  }

  qtdePaginas = () => {

    // let numCat = this.listaCategoriasFiltroBusca().length
    // if(numCat){
    //   return Math.ceil(numCat / this.itensPorPagina)
    // }
    return 1

  }

}
