import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtualizaTokenComponent as AtualizaToken} from './componentes/atualiza-token/atualiza-token.component';
import {LeUsuarioComponent as LeUsuario} from './componentes/le-usuario/le-usuario.component';
import {RegistraUsuarioComponent as RegistraUsuario} from './componentes/registra-usuario/registra-usuario.component';

const routes: Routes = [
  {
    path: "atualiza-token",
    component: AtualizaToken
  },
  {
    path: "le-usuario",
    component: LeUsuario
  },
  {
    path: "registra-usuario",
    component: RegistraUsuario
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
