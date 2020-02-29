import { Action } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';
import * as AutenticacaoAction from '../actions/autenticacao.actions';

const estadoInicial: Usuario = {
    logado: false,
    nome: null,
    email: null,
    jwt: null
}

export function reducer(estado: Usuario = estadoInicial, action: AutenticacaoAction.Actions){
    switch(action.type){
        case AutenticacaoAction.LOG_USER: 
            let regLogin = {
                logado: true,
                ...action.payload
            }
            localStorage.setItem('usuario', JSON.stringify(regLogin))
            return regLogin
        case AutenticacaoAction.LOGOUT:
            localStorage.clear()
            return {
                logado: false,
                nome: null,
                email: null,
                jwt: null
            }
        case AutenticacaoAction.ATUALIZA_TOKEN:
            let regAtualiza = {
                logado: true,
                jwt: action.payload
            }
            localStorage.setItem('usuario', JSON.stringify(regAtualiza))
            return regAtualiza
        default:
            return estado
        
    }
}