import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColecoesComponent } from './views/colecoes/colecoes.component';
import { CriarColecaoComponent } from './views/criar-colecao/criar-colecao.component';
import { CriarModeloComponent } from './views/criar-modelo/criar-modelo.component';
import { HomeComponent } from './views/home/home.component';
import { ModelosComponent } from './views/modelos/modelos.component';
import { TelaDeLoginComponent } from './views/tela-de-login/tela-de-login.component';
import { TelaRedefinirSenhaComponent } from './views/tela-redefinir-senha/tela-redefinir-senha.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: TelaDeLoginComponent
  },
  {
    path: 'redefinir-senha',
    component: TelaRedefinirSenhaComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'colecoes',
    component: ColecoesComponent
  },
  {
    path: 'criar-colecao',
    component: CriarColecaoComponent
  },
  {
    path: 'editar-colecao/:id',
    component: CriarColecaoComponent
  },
  {
    path: 'modelos',
    component: ModelosComponent
  },
  {
    path: 'criar-modelo',
    component: CriarModeloComponent
  },
  {
    path: 'editar-modelo/:id',
    component: CriarModeloComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
