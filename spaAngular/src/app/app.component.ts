import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { Usuario } from './models/usuario.model';
import * as UsuarioActions from './actions/autenticacao.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaAngular';

  usuario: any
  @Input() autenticacao: Observable<Usuario>

  constructor(private store: Store<AppState>, private router: Router) {
    this.autenticacao = store.select('autenticacao')
    this.autenticacao.subscribe((u: any) => {
      this.usuario = { ...u }
      if (this.usuario.logado) {
        let arrayRotas = this.router.url.split("/")
        if(arrayRotas[1] != "admin"){
          this.router.navigateByUrl("/admin")
        }
      }else{
        this.router.navigateByUrl("/")
      }
    })
  }

  _registraUsuario = (u: Usuario) => {
    this.store.dispatch(new UsuarioActions.LogarUsuario(u))
  }

  _logout = () => {
    this.store.dispatch(new UsuarioActions.FazerLogout())
  }

  ngOnInit(): void {
    let usuarioStorage:string = localStorage.getItem('usuario') ? localStorage.getItem('usuario') : null
    if(usuarioStorage){
      let usuarioObj:Usuario = JSON.parse(usuarioStorage)
      this._registraUsuario(usuarioObj)
    }

  }

}
