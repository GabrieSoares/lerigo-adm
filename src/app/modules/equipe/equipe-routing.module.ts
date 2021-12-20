import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EquipCadComponent } from './equip-cad/equip-cad.component';
import { EquipListComponent } from './equip-list/equip-list.component';



const routes: Routes = [
    {
        path: 'equipe-cad',
        component: EquipCadComponent,
    },
    {
        path: 'equipe-cad/:id',
        component: EquipCadComponent,
    },
    {
        path: 'equipe-list',
        component: EquipListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipeRoutingModule { }
