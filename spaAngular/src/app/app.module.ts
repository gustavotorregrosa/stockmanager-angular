import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './componentes/guest/tela-inicial/tela-inicial.component';
import { TelaInicialAdminComponent } from './componentes/admin/tela-inicial-admin/tela-inicial-admin.component';
import { PainelComponent as PainelCategorias } from './componentes/admin/categorias/painel/painel.component';
import { BarraNavInicialComponent } from './componentes/guest/barra-nav-inicial/barra-nav-inicial.component';
import { SplashScreenComponent } from './componentes/comuns/splash-screen/splash-screen.component';
import { ModalLoginComponent } from './componentes/guest/modal-login/modal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaInicialAdminComponent,
    PainelCategorias,
    BarraNavInicialComponent,
    SplashScreenComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
