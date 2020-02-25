import { Component, OnInit, Input } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../auxiliares.service';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model';
import { AppState } from '../../../app.state';
import * as UsuarioActions from '../../../actions/autenticacao.actions';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.css']
})
export class ModalRegistroComponent implements OnInit {

  constructor(private auxiliar: AuxiliaresService, private store: Store<AppState>) { }

  elem: any = null
  instance: any = null
  loader: boolean = false


  @Input() nome: string = ""
  @Input() email: string = ""
  @Input() senha: string = ""
  @Input() confirmacao: string = ""

  ngOnInit(): void {
    this.elem = document.getElementById('modal3')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }

  abreModal = () => {
    this.instance.open()
    M.updateTextFields()
  }

  fechaModal = () => {
    this.instance.close()
  }

  desabilitado = () => {
    if(!this.loader &&
      this.nome.length > 0 &&
      this.email.length > 5 && this.email.includes("@") &&
      this.senha.length >= 8 &&
      this.senha == this.confirmacao
    ){
      return false
    }

   return true   
  }

  confirmacaoValida = () => {   
    if(this.senha.length >= 8 && this.senha == this.confirmacao){
      return true
    }
    return false
  }

  confirmacaoInvalida = () => {
    if(this.senha.length > 0 && this.confirmacao.length == this.senha.length && this.senha != this.confirmacao){
      return true
    }
    return false
  }
  
  _registraUsuario = (u: Usuario) => {
    this.store.dispatch(new UsuarioActions.LogarUsuario(u))
  }

  tryRegistro = (e: Event) => {
    e.preventDefault()
    this.loader = true

    const usuario = {
      nome: this.nome,
      email: this.email,
      password: this.senha
    }

    let myHeaders = new Headers
    myHeaders.set("Content-Type", "application/json")
    let opcoes = {
        url: this.auxiliar.urlBackend.concat('usuario/registrar'),
        method: 'post',
        body: JSON.stringify(usuario),
        headers: myHeaders
    }
    let status
    fetch(opcoes.url, opcoes).then(resposta => {
        status = resposta.status
        return resposta.json()
    }).then(data => {
        if(status == 200){
          let usuarioResposta = {
            logado: true,
            nome: data.usuario.nome,
            email: data.usuario.email,
            jwt: data.jwt
          }

          this._registraUsuario(usuarioResposta)
          this.fechaModal();
        } 
        
        M.toast({html: data.mensagem})
    })


  }

}
