import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/Inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipCadComponent } from './equip-cad/equip-cad.component';
import { EquipListComponent } from './equip-list/equip-list.component';



@NgModule({
  declarations: [
    EquipCadComponent,
    EquipListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    FileUploadModule,
    ToolbarModule,
    TableModule,
    TooltipModule,

    EquipeRoutingModule
  ]
})
export class EquipeModule { }
