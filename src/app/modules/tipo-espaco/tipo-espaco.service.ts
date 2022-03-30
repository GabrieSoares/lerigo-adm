import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEspacoService {

  urlTipo = `${environment.urlApi}tipoEspaco`;

  constructor(private http: HttpClient) { }

  gravar(tipoEspaco: any) {
    return this.http.post<any>(this.urlTipo, Object.assign({}, tipoEspaco))
      .toPromise();
  }

  listarTodos() {
    return this.http.get<any>(`${this.urlTipo}es`)
      .toPromise();
  }

  listarTipoEspaco(id: any) {
    return this.http.get<any>(this.urlTipo + '/' + id)
      .toPromise();
  }

  alterarStatus(codigo: any) {
    let ob = { params: { codigo } }
    return this.http.put<any>(this.urlTipo, {}, ob)
      .toPromise();
  }
}
