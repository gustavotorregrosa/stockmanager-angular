import { Component, OnInit, ViewChild, Output } from '@angular/core';
import {BarraBuscaComponent as BarraBusca} from '../../barra-busca/barra-busca.component';
import {PaginacaoComponent as Paginacao} from '../../paginacao/paginacao.component';
import {AuxiliaresService} from '../../../../auxiliares.service';

@Component({
  selector: 'app-categorias-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @ViewChild(BarraBusca) barraBusca: BarraBusca;
  @ViewChild(Paginacao) barraPaginacao: Paginacao;
  @Output() qtdePaginas: number = 9

  todasCategorias: any = []

  constructor(private auxiliar:AuxiliaresService) { }

  getTodasCategorias = () => {
    this.auxiliar.jwtFetch("categorias/listar").then(categorias => this.todasCategorias = categorias)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTodasCategorias()
    }, 2000)


  }

  @Output() listaCategorias = () => this.todasCategorias
  

}
