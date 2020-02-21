import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import * as helper from '../../../suporte/helper'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'

class NovaCategoria extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false,
        categoria: ""
    }

    componentDidMount() {
        this.elem = document.getElementById('modal-nova-categoria')
        this.instance = M.Modal.init(this.elem, {
            onCloseEnd: () => this.setState({
                loading: false,
                categoria: ""
            })
        })
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = () => {
        this.instance.open()
    }

    fechaModal = () => {
        this.instance.close()
    }

    alterarTextoCategoria = (e) => {
        let categoria = e.target.value
        this.setState({
            categoria
        })
    }

    salvaCategoria = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            url: 'categorias/salvar',
            method: 'post',
            body: JSON.stringify({
                nome: this.state.categoria
            }),
            headers: myHeaders
        }
        let status
        setTimeout(() => {
            jwtFetch(opcoes.url, opcoes).then(r => {
                M.toast({ html: r.mensagem })
                this.fechaModal()
                this.props.listarCategorias()
            }).catch(r => {
                M.toast({ html: r.conteudo.mensagem })
                this.fechaModal()
            })
        }, 1000);
    }

    render() {
        return (
            <div id="modal-nova-categoria" className="modal">
                <div className="modal-content">
                    <div className="input-field col s6">
                        <input value={this.state.categoria} onChange={(e) => this.alterarTextoCategoria(e)} id="nova-categoria" type="text" className="validate" />
                        <label htmlFor="nova-categoria">Nova Categoria</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a onClick={e => this.salvaCategoria(e)} href="#" className="waves-effect waves-green btn-flat">Salvar</a>
                    
                </div>
                {this.state.loading ? (<div className="progress"><div className="indeterminate"></div></div>) : null}

            </div>
        )
    }
}

export default NovaCategoria