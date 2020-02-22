import { Action } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';
import * as AutenticacaoAction from '../actions/autenticacao.actions';

const estadoInicial: Usuario = {
    logado: true,
    nome: "gustavo torregrosa costa",
    email: "gugatcost@hotmail.com",
    jwt: "123456789"
}

export function reducer(estado: Usuario = estadoInicial, action: AutenticacaoAction.Actions){
    switch(action.type){
        case AutenticacaoAction.LOG_USER:
            
            return {
                logado: true,
                ...action.payload
            }
        case AutenticacaoAction.LOGOUT:
            return {
                logado: false,
                nome: null,
                email: null,
                jwt: null
            }
        case AutenticacaoAction.ATUALIZA_TOKEN:
            return {
                ...estado,
                jwt: action.payload
            }
        default:
            return estado
        
    }
}