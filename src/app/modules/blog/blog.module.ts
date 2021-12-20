import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';

import { BlogCadComponent } from './blog-cad/blog-cad.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    BlogCadComponent,
    BlogListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputTextModule,
    EditorModule,
    ButtonModule,
    TabViewModule,
    PanelModule,
    FileUploadModule,
    TableModule,
    ToolbarModule,
    TooltipModule,

    BlogRoutingModule
  ]
})
export class BlogModule { }
