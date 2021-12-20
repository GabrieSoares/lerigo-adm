import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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

    EquipeRoutingModule
  ]
})
export class EquipeModule { }
