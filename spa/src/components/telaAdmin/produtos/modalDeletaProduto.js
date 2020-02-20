import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'

class DeletaProduto extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false,
        id: "",
        nome: ""
    }

    componentDidMount() {
        this.elem = document.getElementById('modal-deleta-produto')
        this.instance = M.Modal.init(this.elem, {
            onCloseEnd: () => this.setState({
                loading: false,
                id: "",
                nome: ""
            })
        })
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = (prd) => {
        let {id, nome} = prd 
        this.setState({
            id,
            nome
        })
        this.instance.open()
    }

    fechaModal = () => {
        this.instance.close()
    }

    deletaProduto = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            url: 'produtos/deletar/' + this.state.id,
            method: 'delete',
            headers: myHeaders
        }
        setTimeout(() => {
            jwtFetch(opcoes.url, opcoes).then(r => {
                M.toast({ html: r.mensagem })
                this.fechaModal()
                this.props.listarProdutos()
            }).catch(r => {
                M.toast({ html: r.conteudo.mensagem })
                this.fechaModal()
            })
        }, 1000);
    }

    render() {
        return (
            <div id="modal-deleta-produto" className="modal">
                <div className="modal-content">
                    <div className="input-field col s6">
                        <p>Deletar o produto {this.state.nome} ?</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <a onClick={e => this.deletaProduto(e)} href="#" className="waves-effect waves-green btn-flat">Deletar</a>
                    
                </div>
                {this.state.loading ? (<div className="progress"><div className="indeterminate"></div></div>) : null}

            </div>
        )
    }
}

export default DeletaProduto