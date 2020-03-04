import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { BarraBuscaComponent as BarraBusca } from '../../barra-busca/barra-busca.component';
import { PaginacaoProdutosComponent as Paginacao } from '../paginacao/paginacao.component';
import { AuxiliaresService } from '../../../../auxiliares.service';
import { SelectCategoriasComponent } from '../select-categorias/select-categorias.component';

@Component({
  selector: 'app-painel-produtos',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  @ViewChild(BarraBusca) barraBusca: BarraBusca
  @ViewChild(SelectCategoriasComponent) selectCategorias: SelectCategoriasComponent
  


  public paginaAtiva: number = 1

  constructor(private auxiliar: AuxiliaresService) { }

  public loader: boolean = true
  @Output() listaCategorias: any = []

  ngOnInit(): void {
    this.getTodasCategorias()
    // setTimeout(() => {
    //   this.listaCategorias.push({
    //     id: 15,
    //     nome: "gustavo"
    //   })
    //   this.selectCategorias.atualizaExibicao()
    // }, 5000)
  }

  qtdePaginas = () => {

    // let numCat = this.listaCategoriasFiltroBusca().length
    // if(numCat){
    //   return Math.ceil(numCat / this.itensPorPagina)
    // }
    return 1

  }

  getTodasCategorias = () => {
    this.auxiliar.jwtFetch("categorias/listar").then((categorias: any) => {
      this.listaCategorias = categorias
      this.selectCategorias.atualizaExibicao()
    })
  }




}
