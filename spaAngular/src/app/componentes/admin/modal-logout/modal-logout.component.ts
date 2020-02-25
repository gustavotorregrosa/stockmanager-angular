import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model';
import { AppState } from '../../../app.state';
import M from 'materialize-css';
import { AuxiliaresService } from '../../../auxiliares.service';
import * as UsuarioActions from '../../../actions/autenticacao.actions';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './modal-logout.component.html',
  styleUrls: ['./modal-logout.component.css']
})
export class ModalLogoutComponent implements OnInit {

  @Input() autenticacao: Observable<Usuario>

  loader: boolean = false
  nome: string
  usuario: any
  elem:any = null
  instance: any = null

  constructor(private store: Store<AppState>) {
    this.autenticacao = store.select('autenticacao')
    this.autenticacao.subscribe((u: any) => {
      this.usuario = { ...u }
    })
  }

  _tryLogout = () => {
    this.store.dispatch(new UsuarioActions.FazerLogout())
  }

  abrirModal = () => {
    this.instance.open()
  }

  logout = (e: Event) => {
    e.preventDefault()
    this.loader = true
   
    setTimeout(() => {
      this._tryLogout()
      this.instance.close()
      M.toast({html: 'Logout realizado com sucesso'})
      
    }, 1000)
  }

  ngOnInit(): void {
    this.elem = document.getElementById('modal2')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }



}
