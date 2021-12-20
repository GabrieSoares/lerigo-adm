import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BlogCadComponent } from './blog-cad/blog-cad.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
    {
        path: 'blog-cad',
        component: BlogCadComponent,
    },
    {
        path: 'blog-cad/:id',
        component: BlogCadComponent,
    },
    {
        path: 'blog-list',
        component: BlogListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
