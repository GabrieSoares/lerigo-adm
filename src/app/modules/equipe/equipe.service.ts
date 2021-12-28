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

  listarTodos() {
    return this.http.get<any>(`${this.urlColab}es`)
      .toPromise();
  }

  listarColoborador(id: any) {
    return this.http.get<any>(this.urlColab + '/' + id)
      .toPromise();
  }

  alterarStatus(codigo: any) {
    let ob = { params: { codigo } }
    return this.http.put<any>(this.urlColab, {}, ob)
      .toPromise();
  }
}
