import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeLivrosComponent } from './lista-de-livros/lista-de-livros.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
//import { ModelComponent } from './model/model.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaDeLivrosComponent,
    MenuComponent,
    FooterComponent,
    TelaLoginComponent//,
    //ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
