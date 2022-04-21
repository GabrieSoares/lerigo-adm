import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobalsService } from 'src/app/shared/global/app-globals.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEspacoService {

  urlTipo = `${environment.urlApi}geral/espaco/tipo`;

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

  gravar(tipoEspaco: any) {
    return this.http.post<any>(this.urlTipo, Object.assign({}, tipoEspaco), this.httpOptions)
      .toPromise();
  }

  listarTodos() {
    return this.http.get<any>(`${this.urlTipo}s`, this.httpOptions)
      .toPromise();
  }

  listarTipoEspaco(id: any) {
    return this.http.get<any>(this.urlTipo + '/' + id, this.httpOptions)
      .toPromise();
  }
}
