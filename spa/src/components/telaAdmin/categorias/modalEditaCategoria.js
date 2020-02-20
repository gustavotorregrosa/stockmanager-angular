import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import * as helper from '../../../suporte/helper'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'

class EditaCategoria extends Component {

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
        this.elem = document.getElementById('modal-edita-categoria')
        this.instance = M.Modal.init(this.elem, {
            onCloseEnd: () => {
                this.setState({
                    loading: false,
                    id: "",
                    nome: ""
                })
                setTimeout(() => {
                    M.updateTextFields()
                }, 100)
            }
        })
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = (cat) => {
        this.instance.open()
        this.setState({
            ...cat
        })
        setTimeout(() => {
            M.updateTextFields()
        }, 100)
    }

    fechaModal = () => {
        this.instance.close()
    }

    alterarTextoCategoria = (e) => {
        let nome = e.target.value
        this.setState({
            nome
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
            url: 'categorias/editar',
            method: 'post',
            body: JSON.stringify({
                id: this.state.id,
                nome: this.state.nome
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
            <div id="modal-edita-categoria" className="modal">
                <div className="modal-content">
                    <div className="input-field col s6">
                        <input value={this.state.nome} onChange={(e) => this.alterarTextoCategoria(e)} id="novo-nome-categoria" type="text" className="validate" />
                        <label htmlFor="novo-nome-categoria">Editar Categoria</label>
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

export default EditaCategoria