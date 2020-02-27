import { Injectable } from '@angular/core';
import M from 'materialize-css';

@Injectable({
  providedIn: 'root'
})
export class AuxiliaresService {

  urlBackend:string = 'http://stockmanager-backend.local/api/';

  minhaFuncaoTeste = () => {
    alert("ola mundo 123")
  }



getJwt = () => {
  // const jwt = store.getState().autenticacao.jwt
  const jwt = "123"
  return jwt
}

atualizaJwtUsuario = () => {
  return new Promise((success, reject) => {
      // store.dispatch(verificaLoginLS())
      success()
  })
}

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


jwtFetch = (url, opcoes = null) => {
  return new Promise((success, reject) => {
      this.pFetchGarantido(url, opcoes).then((r: any) => {
          let status = r.status
          if (status == 203) {
              let objUsuario = r.conteudo
              localStorage.setItem('jwt', objUsuario.jwt)
              localStorage.setItem('usuario', JSON.stringify(objUsuario.usuario))
              this.atualizaJwtUsuario().then(() => this.geraRequest(url, opcoes)).then((r: any) => this.jwtFetchUnit(r)).then((r: any) => r.conteudo).then((r: any) => success(r))
          } else if (status == 301) {
              M.toast({ html: "Voce sera redirecionado para um novo login" })
              localStorage.clear()
              setTimeout(() => {
                  // store.dispatch(verificaLoginLS())
                  setTimeout(() => {
                      const e = new CustomEvent('abreLogin')
                      document.dispatchEvent(e)

                  }, 1000)
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
