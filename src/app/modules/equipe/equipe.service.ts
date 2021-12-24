import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  urlColab = `${environment.urlApi}colaborador`;

  constructor(private http: HttpClient) { }

  gravar(colaborador: any) {
    return this.http.post<any>(this.urlColab, Object.assign({}, colaborador))
      .toPromise();
  }

  listarTodos(status: any) {
    let op: any = { header: {}, params: {} };
    op.params['status'] = status == 1 ? 1 : 0;

    return this.http.get<any>(`${this.urlColab}es`, op)
      .toPromise();
  }

  listarColoborador(id: any) {
    return this.http.get<any>(this.urlColab + '/' + id)
      .toPromise();
  }

  alterarStatus(status: any) {
    status = status == 1 ? 2 : 1;
    return this.http.post<any>(this.urlColab, status)
      .toPromise();
  }
}
