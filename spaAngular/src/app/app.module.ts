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
import {AuxiliaresService} from './auxiliares.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/autenticacao.reducer';
import { ExibeUsuarioComponent } from './componentes/comuns/exibe-usuario/exibe-usuario.component';
import { BarraNavegacaoAdminComponent } from './componentes/admin/barra-navegacao-admin/barra-navegacao-admin.component';
import { ModalLogoutComponent } from './componentes/admin/modal-logout/modal-logout.component';
import { ModalRegistroComponent } from './componentes/guest/modal-registro/modal-registro.component';
import { BarraBuscaComponent } from './componentes/admin/barra-busca/barra-busca.component';
import { PaginacaoProdutosComponent } from './componentes/admin/produtos/paginacao/paginacao.component';
import { PaginacaoCategoriasComponent } from './componentes/admin/categorias/paginacao/paginacao.component';
import { TabelaCategoriasComponent } from './componentes/admin/categorias/tabela/tabela.component';
import { TabelaProdutosComponent } from './componentes/admin/produtos/tabela/tabela.component';
import { ModalEdicaoComponent } from './componentes/admin/categorias/modal-edicao/modal-edicao.component';
import { ModalDeletaComponent } from './componentes/admin/categorias/modal-deleta/modal-deleta.component';
import { ModalCriacaoComponent } from './componentes/admin/categorias/modal-criacao/modal-criacao.component';
import { PainelComponent as PainelProdutos } from './componentes/admin/produtos/painel/painel.component';
import { SelectCategoriasComponent } from './componentes/admin/produtos/select-categorias/select-categorias.component';
import { ModalCriaEditaProdutoComponent } from './componentes/admin/produtos/modal-cria-edita-produto/modal-cria-edita-produto.component';
import { ModalDeletaProdutoComponent } from './componentes/admin/produtos/modal-deleta-produto/modal-deleta-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaInicialAdminComponent,
    PainelCategorias,
    PainelProdutos,
    BarraNavInicialComponent,
    SplashScreenComponent,
    ModalLoginComponent,
    ExibeUsuarioComponent,
    BarraNavegacaoAdminComponent,
    ModalLogoutComponent,
    ModalRegistroComponent,
    BarraBuscaComponent,
    PaginacaoProdutosComponent,
    TabelaProdutosComponent,
    PaginacaoCategoriasComponent,
    TabelaCategoriasComponent,
    ModalEdicaoComponent,
    ModalDeletaComponent,
    ModalCriacaoComponent,
    SelectCategoriasComponent,
    ModalCriaEditaProdutoComponent,
    ModalDeletaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      autenticacao: reducer
    })
  ],
  providers: [AuxiliaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
