import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss']
})
export class ControleComponent implements OnInit {

  opcoes: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.opcoes = [
      { titulo: 'Gerenciar Postagens', rota: 'blog-list' },
      { titulo: 'Gerenciar Equipe', rota: 'equipe-list' }
    ];
  }

  redirect(opcao: any) {
    this.router.navigate([`/${opcao.rota}`])
  }

}
