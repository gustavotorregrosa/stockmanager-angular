import { Component, OnInit, ViewChild } from '@angular/core';
import M from 'materialize-css';
import {ModalLogoutComponent as ModalLogout} from '../modal-logout/modal-logout.component';


@Component({
  selector: 'app-barra-navegacao-admin',
  templateUrl: './barra-navegacao-admin.component.html',
  styleUrls: ['./barra-navegacao-admin.component.css']
})
export class BarraNavegacaoAdminComponent implements OnInit {
  @ViewChild(ModalLogout) logoutModal: ModalLogout;

  constructor() { }

  elem = null
  instancia = null

  ngOnInit(): void {
    this.elem = document.getElementById('minhasidenav')
    M.Sidenav.init(this.elem, {});
    this.instancia = M.Sidenav.getInstance(this.elem)
    // setTimeout(() => {
    //   this.instancia.open()
    // }, 1500)

  }

  abrirModalLogout(e: Event){
    e.preventDefault()
    this.logoutModal.abrirModal()
  }

  abrirMenu(e: Event) {
    e.preventDefault()
    this.instancia.open()
  }

  fecharMenu(e: Event) {
    e.preventDefault()
    this.instancia.close()
  }

}
