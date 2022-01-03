import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [MessageService]

})
export class BlogListComponent implements OnInit {
  posts: any = [];

  constructor(
    private blogService: BlogService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.listarTodas('1');
  }

  novoPost() {
    this.router.navigate(["blog-cad"]);
  }

  editarPost(post: any) {
    this.router.navigate(["blog-cad/" + post.id]);
    console.log(post);
  }

  controlarAtivo(post: any) {
    this.blogService.alterarStatus(post.status)
      .then(rs => {
        this.posts = rs;
        this.listarTodas('');
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível alterar o status!' }));
  }

  listarTodas(status: any) {
    this.blogService.listarTodos(status)
      .then(rs => {
        this.posts = rs;
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  }

  voltar() {
    this.router.navigate(["/controle"]);
  }

}
