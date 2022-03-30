import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { TipoEventoRoutingModule } from './tipo-evento-routing.module';
import { TipoCadComponent } from './tipo-cad/tipo-cad.component';
import { TipoListaComponent } from './tipo-lista/tipo-lista.component';

@NgModule({
  declarations: [
    TipoCadComponent,
    TipoListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    TooltipModule,

    TipoEventoRoutingModule
  ]
})
export class TipoEventoModule { }
