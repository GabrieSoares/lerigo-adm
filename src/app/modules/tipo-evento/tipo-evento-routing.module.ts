import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AuthGuard } from 'src/app/guards/auth.guard';
import { TipoCadComponent } from './tipo-cad/tipo-cad.component';
import { TipoListaComponent } from './tipo-lista/tipo-lista.component';



const routes: Routes = [
    {
        path: 'tipo-evento-cad',
        component: TipoCadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tipo-evento-cad/:id',
        component: TipoCadComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'tipo-evento-list',
        component: TipoListaComponent,
        canActivate: [AuthGuard]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoEventoRoutingModule { }
