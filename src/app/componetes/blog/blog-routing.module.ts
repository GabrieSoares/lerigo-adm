import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BlogCadComponent } from './blog-cad/blog-cad.component';

const routes: Routes = [
    {
        path: 'blog-cad',
        component: BlogCadComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
