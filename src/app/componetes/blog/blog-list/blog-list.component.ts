import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: any = [];
  selectedPost: any;
  constructor() { }

  ngOnInit(): void {
  }

  novoPost() {

  }

  editarPost(post: any) {
    console.log(post);
  }

  excluirPost(post: any) {
    console.log(post);

  }

}
