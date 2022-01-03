import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { ControleComponent } from './controle.component';

const routes: Routes = [
    {
        path: 'controle',
        component: ControleComponent,
        // canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ControleRoutingModule { }
