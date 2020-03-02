import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { BarraBuscaComponent as BarraBusca } from '../../barra-busca/barra-busca.component';
import { PaginacaoComponent as Paginacao } from '../../paginacao/paginacao.component';
import { AuxiliaresService } from '../../../../auxiliares.service';
import {ModalEdicaoComponent as Edicao} from '../modal-edicao/modal-edicao.component';
import { ModalDeletaComponent as Delecao} from '../modal-deleta/modal-deleta.component';

@Component({
  selector: 'app-categorias-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @ViewChild(BarraBusca) barraBusca: BarraBusca;
  @ViewChild(Edicao) modalEdicao: Edicao;
  @ViewChild(Delecao) modalDelecao: Delecao;

  public paginaAtiva: number = 1

  todasCategorias: any = []


  public loader: boolean = true
  public itensPorPagina: number = 5

  constructor(private auxiliar: AuxiliaresService) { }

  getTodasCategorias = () => {
    this.loader = true
    this.auxiliar.jwtFetch("categorias/listar").then((categorias: any) => {
      this.todasCategorias = categorias
      this.loader = false
      this.resetBarraPaginacao()
    })
  }

  qtdePaginas = () => {

    let numCat = this.listaCategoriasFiltroBusca().length
    if(numCat){
      return Math.ceil(numCat / this.itensPorPagina)
    }
    return 1

  }

  resetBarraPaginacao = () => {
    // this.qtdePaginas = 1
    this.paginaAtiva = 1
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTodasCategorias()
    }, 2000)

  }

  listaCategoriasFiltroBusca = (listagem: any = this.todasCategorias) => {
    if (this.barraBusca && this.barraBusca.textoBusca.length > 0) {
      return listagem.filter(c => c.nome.toLowerCase().includes(this.barraBusca.textoBusca.toLowerCase()))
    }
    return listagem
  }

  listaCategoriasPaginacao = (listagem: any) => {
    if (this.qtdePaginas() > 1 && listagem.length > 0) {
      let pagina = this.paginaAtiva
      let listagemFiltrada = listagem.filter((el, i) => {
        let inicioEm = (pagina - 1) * this.itensPorPagina
        let finalEm = pagina * this.itensPorPagina - 1
        if ((i >= inicioEm) && (i <= finalEm)) {
          return true
        }
        return false
      })
      return listagemFiltrada
    }
    return listagem
  }

  composicao = (...fncs) => listagem => fncs.reduce((l, f) => f(l), listagem)

  @Output() listaCategorias = () => {
    let cats = this.composicao(this.listaCategoriasFiltroBusca, this.listaCategoriasPaginacao)(this.todasCategorias)
    return cats
  }


  abreModalEditaCategoria = categoria => {
    this.modalEdicao.abreModal(categoria)
  }

  abreModalDeletaCategoria = categoria => {
    this.modalDelecao.abreModal(categoria)
  }



}
