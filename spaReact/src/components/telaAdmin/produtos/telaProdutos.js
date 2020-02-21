import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import ListaPaginacao from '../searchBar/listaPaginacao'
import SelectCategorias from './selectCategorias'
import TabelaProdutos from './tabelaProdutos'
import CriaEditaProduto from './modalCriaEditaProduto'
import DeletaProduto from './modalDeletaProduto'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'


class TelaProdutos extends Component {

    state = {
        categorias: [],
        selecao: null,
        busca: null,
        produtos: [],
        pagina: 1
    }

    numItensPorPagina = 5

    componentDidMount() {
        this.listaCompletaCategorias()
        this.listaCompletaProdutos()
    }

    alteraPagina = (pagina = null) => {
        this.setState({
            pagina
        })
    }

    listaFiltradaProdutos = () => {
        let produtos = this.state.produtos
        let categoria = this.state.selecao
        let busca = this.state.busca
       

        if (produtos.length) {
            if (categoria) {
                produtos = produtos.filter(el => el.categoria == categoria)
            }
        }

        if(busca){
            produtos = produtos.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()))
        }

        return produtos

    }

    listaPaginadaProdutos = () => {
        let pagina = this.state.pagina
        let produtos = this.listaFiltradaProdutos()
        let produtosF = null
        if (produtos) {
            produtosF = produtos.filter((el, i) => {
                let inicioEm = (pagina - 1) * this.numItensPorPagina
                let finalEm = pagina * this.numItensPorPagina - 1
                if ((i >= inicioEm) && (i <= finalEm)) {
                    return true
                }
                return false
            })
        }
        return produtosF

    }

    listaCompletaProdutos = () => {
        jwtFetch("produtos/listar").then(produtos => {
            this.setState({
                produtos
            })
            if(produtos.length <= this.numItensPorPagina){
                this.setState({
                    pagina: 1
                })
            }
        })
    }

    listaCompletaCategorias = () => {
        jwtFetch("categorias/listar").then(categorias => {
            this.setState({
                categorias
            })
        })
    }

    abreModalEditar = el => {
        this.childAbreModalCriaEditaProduto(el)
    }

    abreModalDeletar = el => {
        this.childAbreModalDeletaProduto(el)
    }

    abreModalCriaProduto = e => {
        e.preventDefault()
        this.childAbreModalCriaEditaProduto()
    }

    listarProdutos = () => {
        this.childListaProdutos()
    }

    atualizaOpcaoSelect = selecao => {
        this.setState({
            selecao,
            pagina: 1
        })
    }

    alteraTextoBusca = busca => {
        this.setState({
            busca,
            pagina: 1
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <div className="col s5"><h5>Produtos</h5></div>
                    <div className="col s6">
                        <SearchBar informaTxtBusca={(t) => this.alteraTextoBusca(t) } />
                    </div>
                    <div className="col s1">
                        <a
                            onClick={e => this.abreModalCriaProduto(e)}
                            style={{
                                marginTop: "1em"
                            }} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <SelectCategorias todas={true} atualizaOpcao={(op) => this.atualizaOpcaoSelect(op)} categorias={this.state.categorias} />
                    </div>
                    <div className="col s4">
                        <ListaPaginacao pagina={this.state.pagina} alteraPagina={(p) => this.alteraPagina(p)} numItensPorPagina={this.numItensPorPagina} itens={this.listaFiltradaProdutos()} />
                    </div>
                </div>
                <br />
                <br />
                <TabelaProdutos produtos={this.listaPaginadaProdutos()} editar={(el) => this.abreModalEditar(el)} deletar={(el) => this.abreModalDeletar(el)} />
                <CriaEditaProduto listarProdutos={() => this.listaCompletaProdutos()} categorias={this.state.categorias} setAbreModal={f => this.childAbreModalCriaEditaProduto = f} />
                <DeletaProduto setAbreModal={f => this.childAbreModalDeletaProduto = f} listarProdutos={() => this.listaCompletaProdutos()} />
             
            </div>
        )
    }

}

export default TelaProdutos