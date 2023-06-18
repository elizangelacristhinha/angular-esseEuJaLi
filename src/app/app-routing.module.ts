import { VisualizarLivroComponent } from './visualizar-livro/visualizar-livro.component';
import { ListaDeLivrosComponent } from './lista-de-livros/lista-de-livros.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'listaDeLivros', component: ListaDeLivrosComponent },
  { path: 'visualizarLivro', component: VisualizarLivroComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
