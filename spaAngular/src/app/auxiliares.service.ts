import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import M from 'materialize-css';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { Usuario } from './models/usuario.model';
import * as UsuarioActions from './actions/autenticacao.actions';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuxiliaresService {
  @Input() autenticacao: Observable<Usuario>
  public usuario: Usuario

  urlBackend:string = 'http://stockmanager-backend.local/api/';



constructor(private store: Store<AppState>){ 
  this.autenticacao = store.select('autenticacao')
    this.autenticacao.subscribe((u: any) => {
      this.usuario = { ...u }
    })
}

getJwt = () => {
  const jwt = this.usuario.jwt
  return jwt
}

// atualizaJwtUsuario = () => {
//   return new Promise((success, reject) => {
//       // store.dispatch(verificaLoginLS())
//       success()
//   })
// }

geraRequest = (rota, obj = null) => {
  let method = obj ? obj.method : "get"

  let h = new Headers()
  h.set("Content-Type", "application/json")
  h.set("jwt", this.getJwt())

  let objRequest: any = {
      method,
      headers: h,
  }

  if (method != "get") {
      objRequest.body = obj.body
  }

  return new Request(this.urlBackend + rota, objRequest)
}



jwtFetchUnit = requestUnit => {
  return new Promise((success, reject) => {
      fetch(requestUnit).then(r => {
          let status = r.status
          success(r.json().then(conteudo => {
              return {
                  status,
                  conteudo
              }
          }))
      })
  })
}


pFetchGarantido = (url, opcoes) => new Promise((success, reject) => {
  this.jwtFetchUnit(this.geraRequest(url, opcoes)).then(resp => success(resp))
})

// _registraUsuario = (u: Usuario) => new Promise(async (success, reject) => {
//     await this.store.dispatch(new UsuarioActions.LogarUsuario(u))
//     return success()
// })


atualizaToken = (token: string) => new Promise((success, reject) => {
      this.store.dispatch(new UsuarioActions.AtualizaToken(token))
      success()
  })


jwtFetch = (url, opcoes = null) => {
  return new Promise((success, reject) => {
      this.pFetchGarantido(url, opcoes).then((r: any) => {
          let status = r.status
          if (status == 203) {
              // let objUsuario = r.conteudo
              // let usuario = {
              //   logado: true,
              //   nome: objUsuario.usuario.nome,
              //   email: objUsuario.usuario.email,
              //   jwt: objUsuario.jwt
              // }

              this.atualizaToken(r.conteudo.jwt).then(() => this.geraRequest(url, opcoes)).then((r: any) => this.jwtFetchUnit(r)).then((r: any) => r.conteudo).then((r: any) => success(r))


              // this.atualizaJwtUsuario().then(() => this.geraRequest(url, opcoes)).then((r: any) => this.jwtFetchUnit(r)).then((r: any) => r.conteudo).then((r: any) => success(r))
          } else if (status == 301) {
              M.toast({ html: "Voce sera redirecionado para um novo login" })
              localStorage.clear()
              setTimeout(() => {
                this.store.dispatch(new UsuarioActions.FazerLogout())
                  setTimeout(() => {
                      const e = new CustomEvent('abreLogin')
                      document.dispatchEvent(e)

                  }, 2000)
              }, 500)
          }
          else if (status < 200 || status > 299) {
              reject(r)
          }
          else {
              success(r.conteudo)
          }

      })
  })
}

}
