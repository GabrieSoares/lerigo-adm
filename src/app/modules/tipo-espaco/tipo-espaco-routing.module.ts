import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AuthGuard } from 'src/app/guards/auth.guard';
import { TipoCadComponent } from './tipo-cad/tipo-cad.component';
import { TipoListaComponent } from './tipo-lista/tipo-lista.component';



const routes: Routes = [
    {
        path: 'tipo-espaco-cad',
        component: TipoCadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tipo-espaco-cad/:id',
        component: TipoCadComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'tipo-espaco-list',
        component: TipoListaComponent,
        canActivate: [AuthGuard]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoEspacoRoutingModule { }
