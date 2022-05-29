import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ColecoesComponent } from './views/colecoes/colecoes.component';
import { CriarColecaoComponent } from './views/criar-colecao/criar-colecao.component';
import { CriarModeloComponent } from './views/criar-modelo/criar-modelo.component';
import { HomeComponent } from './views/home/home.component';
import { ModelosComponent } from './views/modelos/modelos.component';
import { TelaDeLoginComponent } from './views/tela-de-login/tela-de-login.component';
import { TelaRedefinirSenhaComponent } from './views/tela-redefinir-senha/tela-redefinir-senha.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelaDeLoginComponent,
    TelaRedefinirSenhaComponent,
    SidenavComponent,
    ColecoesComponent,
    ModelosComponent,
    CriarColecaoComponent,
    CriarModeloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule

  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
