import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalLoginComponent as LoginModal } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-barra-nav-inicial',
  templateUrl: './barra-nav-inicial.component.html',
  styleUrls: ['./barra-nav-inicial.component.css']
})
export class BarraNavInicialComponent implements OnInit {
  @ViewChild(LoginModal) loginModal: LoginModal;
  constructor() { }

  ngOnInit(): void {

  }

  abreModal = (e: Event) => {
    e.preventDefault()
    this.loginModal.abreModal()
  }
}
