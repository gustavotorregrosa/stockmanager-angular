import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model'; 
import { AppState } from '../../app.state';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-le-usuario',
  templateUrl: './le-usuario.component.html',
  styleUrls: ['./le-usuario.component.css']
})
export class LeUsuarioComponent implements OnInit {

  autenticacao: Observable<Usuario>


  nome:string = "gustavo torregrosa"
  email:string = "gustavo.torregrosa@gmail.com"
  jwt:string = "4c96f8324e3ba54a99e78249b95daa30"

  constructor(store: Store<AppState>) {
    this.autenticacao = store.select('autenticacao');
   }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("bateu aqui...")
      this.autenticacao.subscribe((dados:any) => console.log(dados))


    }, 2000)
    

  }

}
