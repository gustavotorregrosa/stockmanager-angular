import React, { Component } from 'react'

class TabelaCategorias extends Component {

    listaItens = () => {
        if (this.props.categorias) {
            let categorias = [...this.props.categorias]
            let tbl = categorias.map(el => (<tr key={el.id}><td>{el.nome}</td><td>{this.botoes(el)}</td></tr>))
            return tbl
        }
        return null
    }   

    botoes = (el) => {
        return (
            <div>
                <a href="#" onClick={(e) => this.ativaEdicao(e, el)}><i class="material-icons">edit</i></a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" onClick={(e) => this.ativaDelecao(e, el)}><i class="material-icons">delete</i></a>
            </div>
        )
    }

    ativaEdicao = (e, el) => {
        e.preventDefault()
        this.props.editar(el)
    }

    ativaDelecao = (e, el) => {
        e.preventDefault()
        this.props.deletar(el)
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Categorias</th>
                            <th>Acoes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.listaItens()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TabelaCategorias