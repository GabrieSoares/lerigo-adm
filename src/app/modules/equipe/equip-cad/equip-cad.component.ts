import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-equip-cad',
  templateUrl: './equip-cad.component.html',
  styleUrls: ['./equip-cad.component.scss'],
  providers: [MessageService]

})
export class EquipCadComponent implements OnInit {

  editando = false;
  colaborador: any = [];

  constructor(
    private equipService: EquipeService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editando = true;
      this.carregarPost(id);
    }
  }

  gravar() {
    if (!this.colaborador.id) {
      this.colaborador.id = '';
      this.colaborador.status = 0;
    }
    console.log(this.colaborador);

    this.equipService.gravar(this.colaborador)
      .then(() => {
        this.messageService.add({ severity: 'sucess', summary: 'sucess', detail: 'Gravado com sucesso!' });
        this.router.navigate(["equipe-list"]);
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível gravar os dados!' }));

  }

  cancelar() {
    this.router.navigate(['equipe-list'])
  }

  async uploadHandler(foto: any, uploader: FileUpload) {
    this.colaborador.foto = await this.blobToBase64(foto.files[0]);
    uploader.clear();
  }

  blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  carregarPost(id: number) {
    this.equipService.listarColoborador(id)
      .then(rs => {
        this.colaborador = rs;
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  }

}
