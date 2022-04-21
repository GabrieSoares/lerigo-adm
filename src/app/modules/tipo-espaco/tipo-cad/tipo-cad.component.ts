import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TipoEspacoService } from '../tipo-espaco.service';

@Component({
  selector: 'app-tipo-cad',
  templateUrl: './tipo-cad.component.html',
  styleUrls: ['./tipo-cad.component.scss'],
  providers: [MessageService]
})
export class TipoCadComponent implements OnInit {
  editando = false;
  tipo: any = [];

  constructor(
    private TpEspacoSvc: TipoEspacoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editando = true;
      this.carregarTipo(id);
    }
  }

  gravar() {
    if (!this.tipo.id) {
      this.tipo.id = '';
      this.tipo.status = 'A';
    }

    this.TpEspacoSvc.gravar(this.tipo)
      .then(() => {
        this.messageService.add({ severity: 'sucess', summary: 'sucess', detail: 'Gravado com sucesso!' });
        this.router.navigate(["tipo-espaco-list"]);
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível gravar os dados!' }));

  }

  cancelar() {
    this.router.navigate(['tipo-espaco-list'])
  }


  carregarTipo(id: number) {
    this.TpEspacoSvc.listarTipoEspaco(id)
      .then(rs => {
        this.tipo = rs;
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  }

}
