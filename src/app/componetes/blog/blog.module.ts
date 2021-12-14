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

import { BlogCadComponent } from './blog-cad/blog-cad.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogCadComponent,
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

    BlogRoutingModule
  ]
})
export class BlogModule { }
