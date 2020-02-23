import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Usuario } from './models/usuario.model';
import * as UsuarioActions from './actions/autenticacao.actions'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
 
  title = 'usuarioNg';

  _registraUsuario = (u: Usuario) => {
    this.store.dispatch(new UsuarioActions.LogarUsuario(u))
  }

  ngOnInit(): void {
      let usuarioStorage:string = localStorage.getItem('usuario') ? localStorage.getItem('usuario') : null
      if(usuarioStorage){
        let usuarioObj:Usuario = JSON.parse(usuarioStorage)
        this._registraUsuario(usuarioObj)


      }
  }
  
}
