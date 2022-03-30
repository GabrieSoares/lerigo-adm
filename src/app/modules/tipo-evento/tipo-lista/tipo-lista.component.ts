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

  tpsEspaco: any = [];

  constructor(
    public tpEventoSvc: TipoEventoService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  async listarTodos() {
    //await this.equipService.listarTodos()
      //.then(rs => {
        //this.colaboladores = rs;
      //})
      //.catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  }

  novoTipo() {
    this.router.navigate(["tipo-evento-cad"]);
  }

  editarTpEspaco(tpEvento: any) {
    this.router.navigate(["equipe-cad/" + tpEvento.id]);
  }

  controlarAtivo(tpEvento: any) {
    // this.equipService.alterarStatus(colaborador.id)
    //   .then(rs => {
    //     this.colaboladores = rs;
    //     this.listarTodos();
    //   })
    //   .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível alterar o status!' }));
  }

  voltar() {
    this.router.navigate(["/controle"]);
  }

}
