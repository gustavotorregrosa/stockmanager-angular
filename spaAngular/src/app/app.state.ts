import { Usuario } from './models/usuario.model';

export interface AppState {
    readonly autenticacao: Usuario
}