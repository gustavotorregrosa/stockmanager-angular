import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalLoginComponent as LoginModal } from '../modal-login/modal-login.component';
import {ModalRegistroComponent as RegistroModal} from '../modal-registro/modal-registro.component';

@Component({
  selector: 'app-barra-nav-inicial',
  templateUrl: './barra-nav-inicial.component.html',
  styleUrls: ['./barra-nav-inicial.component.css']
})
export class BarraNavInicialComponent implements OnInit {
  @ViewChild(LoginModal) loginModal: LoginModal;
  @ViewChild(RegistroModal) registroModal: RegistroModal;

  constructor() { }

  ngOnInit(): void {

  }

  abreModalLogin = (e: Event) => {
    e.preventDefault()
    this.loginModal.abreModal()
  }

  abreModalRegistro = (e: Event) => {
    e.preventDefault()
    this.registroModal.abreModal()
  }
}
