import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './modules/blog/blog.module';
import { ControleModule } from './modules/controle/controle.module';
import { EquipeModule } from './modules/equipe/equipe.module';
import { LoginModule } from './modules/login/login.module';
import { LoginService } from './modules/login/login.service';
import { TipoEspacoModule } from './modules/tipo-espaco/tipo-espaco.module';
import { TipoEventoModule } from './modules/tipo-evento/tipo-evento.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    BlogModule,
    EquipeModule,
    LoginModule,
    ControleModule,
    TipoEspacoModule,
    TipoEventoModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
