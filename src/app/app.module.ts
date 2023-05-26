import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeLivrosComponent } from './lista-de-livros/lista-de-livros.component';
import { LoginComponent } from './lista-de-livros/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeLivrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
