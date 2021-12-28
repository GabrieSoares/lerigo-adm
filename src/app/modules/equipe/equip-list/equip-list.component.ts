import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-equip-list',
  templateUrl: './equip-list.component.html',
  styleUrls: ['./equip-list.component.scss'],
  providers: [MessageService]

})
export class EquipListComponent implements OnInit {

  colaboladores: any = [];

  constructor(
    public equipService: EquipeService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  async listarTodos() {
    await this.equipService.listarTodos()
      .then(rs => {
        this.colaboladores = rs;
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  }

  novoColab() {
    this.router.navigate(["equipe-cad"]);
  }

  editarColaborador(colaborador: any) {
    this.router.navigate(["equipe-cad/" + colaborador.id]);
    console.log(colaborador);
  }

  controlarAtivo(colaborador: any) {
    this.equipService.alterarStatus(colaborador.id)
      .then(rs => {
        this.colaboladores = rs;
        this.listarTodos();
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível alterar o status!' }));
  }

  voltar() {
    this.router.navigate([""]);
  }

}
