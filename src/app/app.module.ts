import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeLivrosComponent } from './lista-de-livros/lista-de-livros.component';
import { LoginComponent } from './lista-de-livros/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { TableBasicComponent } from './table-basic/table-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeLivrosComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    ListarLivrosComponent,
    TableBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
