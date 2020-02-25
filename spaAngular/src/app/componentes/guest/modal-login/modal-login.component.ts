import { Component, OnInit, Input } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../auxiliares.service';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model'; 
import { AppState } from '../../../app.state';
import * as UsuarioActions from '../../../actions/autenticacao.actions';



@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  elem:any = null
  instance: any = null
  loader: boolean = false

  @Input() email:string
  @Input() senha:string

  constructor(private auxiliar:AuxiliaresService, private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.elem = document.getElementById('modal1')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }


  _registraUsuario = (u: Usuario) => {
    this.store.dispatch(new UsuarioActions.LogarUsuario(u))
  }

  tryLogin = (e: Event) => {
    e.preventDefault()
    this.loader = true
    const infoLogin = {
      email: this.email,
      password: this.senha
    }

    let myHeaders = new Headers
    myHeaders.set("Content-Type", "application/json")
    let opcoes = {
        url: this.auxiliar.urlBackend.concat('usuario/login'),
        method: 'post',
        body: JSON.stringify(infoLogin),
        headers: myHeaders
    }
    let status
    fetch(opcoes.url, opcoes).then(resposta => {
        status = resposta.status
        return resposta.json()
    }).then(data => {
        if(status == 200){
          let usuario = {
            logado: true,
            nome: data.usuario.nome,
            email: data.usuario.email,
            jwt: data.jwt
          }
          this._registraUsuario(usuario)
          this.fechaModal();
        } 
        
        M.toast({html: data.mensagem})
    })
  }


  abreModal = () => {
    this.instance.open()
    M.updateTextFields()
  }

  fechaModal = () => {
    this.instance.close()
  }

}
