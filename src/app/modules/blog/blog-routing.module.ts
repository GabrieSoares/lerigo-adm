import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BlogCadComponent } from './blog-cad/blog-cad.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
    {
        path: 'blog-cad',
        component: BlogCadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'blog-cad/:id',
        component: BlogCadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'blog-list',
        component: BlogListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
