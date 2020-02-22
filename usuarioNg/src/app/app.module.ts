import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistraUsuarioComponent } from './componentes/registra-usuario/registra-usuario.component';
import { AtualizaTokenComponent } from './componentes/atualiza-token/atualiza-token.component';
import { LeUsuarioComponent } from './componentes/le-usuario/le-usuario.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { reducer } from './reducers/autenticacao.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RegistraUsuarioComponent,
    AtualizaTokenComponent,
    LeUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // })
    StoreModule.forRoot({
      autenticacao: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
