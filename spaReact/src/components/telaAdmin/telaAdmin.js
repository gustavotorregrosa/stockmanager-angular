import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import NavBar from './topNavBarAdmin/topNavBarAdmin'
import { connect } from 'react-redux'
import TelaCategorias from './categorias/telaCategorias'
import TelaProdutos from './produtos/telaProdutos'

class TelaAdmin extends Component {
    componentDidUpdate() {
        if (this.props.logado === false) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <NavBar />                
                <Switch>
                    <Route path='/admin/categorias' component={TelaCategorias} />
                    <Route path='/admin/produtos' component={TelaProdutos} />
                    <Redirect from="/admin/*" to="/admin" />
                </Switch>
                

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        logado: state.autenticacao.logado,
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(TelaAdmin)