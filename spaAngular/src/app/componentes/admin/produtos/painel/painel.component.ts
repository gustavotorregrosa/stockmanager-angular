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
  public todosProdutos: any = []
  public itensPorPagina: number = 5

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
    // setTimeout(() => {
    //   this.loader = false
    // }, 2500)
    setTimeout(() => {
     
        this.getTodosProdutos()
   
    }, 2000)

  }


  listaProdutosPaginacao = (listagem: any) => {
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

  @Output() listaProdutos = () => {
    let prods = this.composicao(this.listaProdutosFiltroBusca, this.listaProdutosPaginacao)(this.todosProdutos)
    return prods
  }


  qtdePaginas = () => {
    let numProds = this.listaProdutosFiltroBusca().length
    if(numProds){
      return Math.ceil(numProds / this.itensPorPagina)
    }
    return 1
  }

  listaProdutosFiltroBusca = (listagem: any = this.todosProdutos) => {
    if (this.barraBusca && this.barraBusca.textoBusca.length > 0) {
      return listagem.filter(c => c.nome.toLowerCase().includes(this.barraBusca.textoBusca.toLowerCase()))
    }
    return listagem
  }

  // listaProdutos = () => this.todosProdutos



  getTodosProdutos = () => {
    this.auxiliar.jwtFetch("produtos/listar").then(produtos => {
      this.todosProdutos = produtos
      this.loader = false
      this.resetBarraPaginacao()

        // if(produtos.length <= this.numItensPorPagina){
        //     this.setState({
        //         pagina: 1
        //     })
        // }
    })
}


resetBarraPaginacao = () => {
  this.paginaAtiva = 1
}



  getTodasCategorias = () => {
    this.auxiliar.jwtFetch("categorias/listar").then((categorias: any) => {
      this.listaCategorias = categorias
      this.selectCategorias.atualizaExibicao()
    })
  }




}
