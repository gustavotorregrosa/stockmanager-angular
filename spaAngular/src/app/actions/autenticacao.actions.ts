import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';

export const LOG_USER = '[USUARIO] Login'
export const LOGOUT = '[USUARIO] Logout'
export const ATUALIZA_TOKEN = '[USUARIO] Atualiza token'

export class LogarUsuario implements Action {
    readonly type: string = LOG_USER
    constructor(public payload: Usuario){ }
}

export class AtualizaToken implements Action {
    readonly type: string = ATUALIZA_TOKEN
    constructor(public payload: string){}
}

export class FazerLogout implements Action {
    readonly type: string = LOGOUT
    public payload: any = null
}

export type Actions = LogarUsuario | AtualizaToken | FazerLogout