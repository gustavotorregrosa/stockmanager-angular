import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model'; 
import { AppState } from '../../app.state';
import * as UsuarioActions from '../../actions/autenticacao.actions';


@Component({
  selector: 'app-registra-usuario',
  templateUrl: './registra-usuario.component.html',
  styleUrls: ['./registra-usuario.component.css']
})
export class RegistraUsuarioComponent implements OnInit {

  @Input() email:string
  @Input() nome:string
  @Input() jwt:string

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  

  _registraUsuario = (u: Usuario) => {
    this.store.dispatch(new UsuarioActions.LogarUsuario(u))
  }
  
  registraUsuario = (e: Event) => {
    e.preventDefault()    
    let uTemp:Usuario = {
      logado: true,
      nome: this.nome,
      email: this.email,
      jwt: this.jwt
    }

    this._registraUsuario(uTemp)


  }

}
