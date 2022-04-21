import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { TipoEspacoService } from '../tipo-espaco.service';

@Component({
  selector: 'app-tipo-lista',
  templateUrl: './tipo-lista.component.html',
  styleUrls: ['./tipo-lista.component.scss'],
  providers: [MessageService]
})
export class TipoListaComponent implements OnInit {

  tpsEspaco: any = [];

  constructor(
    public tpEspacoSvc: TipoEspacoService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  async listarTodos() {
    await this.tpEspacoSvc.listarTodos()
      .then(rs => {
        this.tpsEspaco = rs;
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  }

  novoTipo() {
    this.router.navigate(["tipo-espaco-cad"]);
  }

  editarTpEspaco(tpEspaco: any) {
    this.router.navigate(["tipo-espaco-cad/" + tpEspaco.id]);
  }

  controlarAtivo(tpEspaco: any) {
    tpEspaco.status = tpEspaco.status == 'A' ? 'N' : 'A';
    this.tpEspacoSvc.gravar(tpEspaco)
      .then(() => {
        this.listarTodos();
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível alterar o status!' }));
  }

  voltar() {
    this.router.navigate(["/controle"]);
  }

}
