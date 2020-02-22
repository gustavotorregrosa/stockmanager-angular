import { Component, OnInit, Input } from '@angular/core';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../auxiliares.service';


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

  constructor(private auxiliar:AuxiliaresService) {

  }

  ngOnInit(): void {
    this.elem = document.getElementById('modal1')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }

  tryLogin = (e: Event) => {
    e.preventDefault()
    this.loader = true
    console.log("email: " + this.email)
    console.log("password: " + this.senha)

    // let myHeaders = new Headers
    // myHeaders.set("Content-Type", "application/json")
    // let opcoes = {
    //     url: this.auxiliar.urlBackend.concat('usuario/login'),
    //     method: 'post',
    //     body: JSON.stringify(this.state),
    //     headers: myHeaders
    // }
    // let status
    // fetch(opcoes.url, opcoes).then(resposta => {
    //     status = resposta.status
    //     return resposta.json()
    // }).then(data => {
    //     if(status == 200){
    //         localStorage.setItem("usuario", JSON.stringify(data.usuario))
    //         localStorage.setItem("jwt", data.jwt)
    //         this.fechaModal()
    //         this.props.verificaLoginLocalStorage()
    //     } 
        
    //     M.toast({html: data.mensagem})
    // })



  }


  abreModal = () => {
    this.instance.open()
    // alert(this.auxiliar.urlBackend);
    M.updateTextFields()
  }

}
