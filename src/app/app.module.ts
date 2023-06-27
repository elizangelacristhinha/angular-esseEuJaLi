import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CpfPipe } from './pipes/cpf.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeLivrosComponent } from './lista-de-livros/lista-de-livros.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { VisualizarLivroComponent } from './visualizar-livro/visualizar-livro.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
//import { ModelComponent } from './model/model.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LivroComponent } from './lista-de-livros/livro/livro.component';
@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    AppComponent,
    ListaDeLivrosComponent,
    MenuComponent,
    FooterComponent,
    CpfPipe,
    UserComponent,
    TelaLoginComponent,
    VisualizarLivroComponent,
    CadastrarUsuarioComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
