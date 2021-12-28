import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EquipCadComponent } from './equip-cad/equip-cad.component';
import { EquipListComponent } from './equip-list/equip-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';



const routes: Routes = [
    {
        path: 'equipe-cad',
        component: EquipCadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'equipe-cad/:id',
        component: EquipCadComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'equipe-list',
        component: EquipListComponent,
        canActivate: [AuthGuard]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipeRoutingModule { }
