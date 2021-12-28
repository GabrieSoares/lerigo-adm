import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userlogado: boolean = false;
  urlLogin = `${environment.urlApi}login`;
  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    let body = {
      email,
      password
    }
    return this.http.post<any>(this.urlLogin, body)
      .toPromise();
  }

  logout() {

  }

  getUserLogado() {
    return this.userlogado;
  }

  setUserLogado(status: boolean) {
    this.userlogado = status;
  }
}
