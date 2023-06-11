import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';

const routes: Routes = [{path: '', component: ListarLivrosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
