import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  elem:any
  instance: any
  loader: boolean = false

  constructor() {

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
  }


  abreModal = () => {
    this.instance.open()
    alert(urlBackend);
    M.updateTextFields()
  }

}
