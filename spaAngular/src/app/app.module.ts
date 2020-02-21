import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './componentes/guest/tela-inicial/tela-inicial.component';
import { TelaInicialAdminComponent } from './componentes/admin/tela-inicial-admin/tela-inicial-admin.component';
import { PainelComponent as PainelCategorias } from './componentes/admin/categorias/painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaInicialAdminComponent,
    PainelCategorias
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
