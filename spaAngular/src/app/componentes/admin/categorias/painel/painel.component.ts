import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { BarraBuscaComponent as BarraBusca } from '../../barra-busca/barra-busca.component';
import { PaginacaoComponent as Paginacao } from '../../paginacao/paginacao.component';
import { AuxiliaresService } from '../../../../auxiliares.service';

@Component({
  selector: 'app-categorias-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @ViewChild(BarraBusca) barraBusca: BarraBusca;
  @ViewChild(Paginacao) barraPaginacao: Paginacao;
  

  todasCategorias: any = []

  public loader: boolean = true
  itensPorPagina: number = 3

  constructor(private auxiliar: AuxiliaresService) { }

  getTodasCategorias = () => {
    this.loader = true
    this.barraPaginacao.reset()
    this.auxiliar.jwtFetch("categorias/listar").then((categorias: any) => {
      this.todasCategorias = categorias
      this.loader = false
      this.barraPaginacao.qtdePaginas = Math.ceil(categorias.length / this.itensPorPagina)
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTodasCategorias()
    }, 2000)

  }

  listaCategoriasFiltroBusca = (listagem: any) => {
    try{
      let textoBusca = this.barraBusca.textoBusca
      if (textoBusca.length > 0) {
        return listagem.filter(c => c.nome.toLowerCase().includes(textoBusca.toLowerCase()))
      }
      return listagem
    } catch(e){
      return listagem
    }
   
   
  }

  listaCategoriasPaginacao = (listagem: any) => {
    try{
      if (this.barraPaginacao.qtdePaginas > 1 && listagem.length > 0) {
        let pagina = this.barraPaginacao.paginaAtiva
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
    } catch(e) {
      return listagem
    }
    
   
  }

  composicao = (...fncs) => listagem => fncs.reduce((l, f) => f(l), listagem)


  @Output() listaCategorias = () => {
    let cats = this.composicao(this.listaCategoriasFiltroBusca, this.listaCategoriasPaginacao)(this.todasCategorias)
    this.barraPaginacao.reset()
    this.barraPaginacao.qtdePaginas = Math.ceil(cats.length / this.itensPorPagina)
    return cats
  }

}
