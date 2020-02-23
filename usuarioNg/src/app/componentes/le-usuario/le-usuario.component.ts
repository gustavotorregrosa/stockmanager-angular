import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-le-usuario',
  templateUrl: './le-usuario.component.html',
  styleUrls: ['./le-usuario.component.css']
})

export class LeUsuarioComponent implements OnInit {
  
  usuario: any
  @Input() autenticacao: Observable<Usuario>

  constructor(store: Store<AppState>) {
    this.autenticacao = store.select('autenticacao')
    this.autenticacao.subscribe((u: any) => {
      this.usuario = { ...u }
    })
    
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.autenticacao.subscribe((u: any) => {
    //     this.usuario = { ...u }
    //   })
    // }, 4000)





  }

}
