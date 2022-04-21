import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobalsService } from 'src/app/shared/global/app-globals.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEventoService {

  urlTipo = `${environment.urlApi}geral/evento/tipo`;

  constructor(
    private http: HttpClient,
    private appService: AppGlobalsService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.appService.authorization
    })
  };
  gravar(tipoEvento: any) {
    return this.http.post<any>(this.urlTipo, Object.assign({}, tipoEvento), this.httpOptions)
      .toPromise();
  }

  listarTodos() {
    return this.http.get<any>(`${this.urlTipo}s`, this.httpOptions)
      .toPromise();
  }

  listarTipoEvento(id: any) {
    return this.http.get<any>(this.urlTipo + '/' + id, this.httpOptions)
      .toPromise();
  }
}
