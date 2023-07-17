import { ListaDeLivrosComponent } from './lista-de-livros/lista-de-livros.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { LivroComponent } from './lista-de-livros/livro/livro.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'listaDeLivros', component: ListaDeLivrosComponent },
  { path: 'visualizarLivro', component: LivroComponent },
  { path: 'visualizarRanking', component: RankingComponent },
  { path: 'cadastrarUsuario', component: CadastrarUsuarioComponent },];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
