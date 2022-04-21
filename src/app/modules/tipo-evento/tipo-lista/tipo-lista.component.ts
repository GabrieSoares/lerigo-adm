import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { TipoEventoService } from '../tipo-evento.service';

@Component({
  selector: 'app-tipo-lista',
  templateUrl: './tipo-lista.component.html',
  styleUrls: ['./tipo-lista.component.scss'],
  providers: [MessageService]
})
export class TipoListaComponent implements OnInit {

  tpsEvento: any = [];

  constructor(
    public tpEventoSvc: TipoEventoService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  async listarTodos() {
    await this.tpEventoSvc.listarTodos()
      .then(rs => {
        this.tpsEvento = rs;
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  }

  novoTipo() {
    this.router.navigate(["tipo-evento-cad"]);
  }

  editarTpEspaco(tpEvento: any) {
    this.router.navigate(["tipo-evento-cad/" + tpEvento.id]);
  }

  controlarAtivo(tpEvento: any) {
    console.log(tpEvento);
    tpEvento.status = tpEvento.status == "A" ? "N" : "A";
    this.tpEventoSvc.gravar(tpEvento)
      .then(() => {
        this.listarTodos();
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível alterar o status!' }));
  }

  voltar() {
    this.router.navigate(["/controle"]);
  }

}
