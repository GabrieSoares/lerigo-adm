import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEventoService {

  urlTipo = `${environment.urlApi}tipoEvento`;

  constructor(private http: HttpClient) { }

  gravar(tipoEvento: any) {
    return this.http.post<any>(this.urlTipo, Object.assign({}, tipoEvento))
      .toPromise();
  }

  listarTodos() {
    return this.http.get<any>(`${this.urlTipo}es`)
      .toPromise();
  }

  listarTipoEvento(id: any) {
    return this.http.get<any>(this.urlTipo + '/' + id)
      .toPromise();
  }

  alterarStatus(codigo: any) {
    let ob = { params: { codigo } }
    return this.http.put<any>(this.urlTipo, {}, ob)
      .toPromise();
  }
}
