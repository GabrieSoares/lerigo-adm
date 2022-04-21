import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalsService {

  public usuario: any = [];
  public authorization?: any;

  constructor(
    private router: Router
  ) { }



  errorHandler(error: any) {
    if (error.status = 401 && error.error?.status == "Authorization Token not found") {
      this.router.navigate(['home']);
      Swal.fire({
        icon: 'info',
        title: 'Poxa, sua sessão expirou',
        text: 'Para continuar usando, basta logar novamente'
      });
    } else {
      let msg = `Não foi possível concluir sua solicitação, tente novamente mais tarde! 
      \n
      Caso o problema persista entre em contato com nossa Equipe!`;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg
      });
    }
  }
}
