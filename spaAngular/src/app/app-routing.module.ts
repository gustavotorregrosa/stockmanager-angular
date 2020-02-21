import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialAdminComponent as TelaInicialAdmin } from './componentes/admin/tela-inicial-admin/tela-inicial-admin.component';
import { TelaInicialComponent as TelaInicialGuest} from './componentes/guest/tela-inicial/tela-inicial.component';
import {PainelComponent as PainelCategorias} from './componentes/admin/categorias/painel/painel.component';
import {PainelComponent as PainelProdutos} from './componentes/admin/produtos/painel/painel.component';

const routes: Routes = [
  {
    path: "",
    component: TelaInicialGuest
  },
  {
    path: "admin",
    children: [
      {
        path: "",
        component: TelaInicialAdmin
      },
      {
        path: "categorias",
        component: PainelCategorias
      },
      {
        path: "produtos",
        component: PainelProdutos
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
