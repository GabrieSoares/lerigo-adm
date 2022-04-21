import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppGlobalsService } from 'src/app/shared/global/app-globals.service';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(
    private loginService: LoginService,
    private appGlobals: AppGlobalsService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  async acessar() {
    await this.loginService.login(this.email, this.password)
      .then(rs => {
        console.log('rs:', rs);
        if (rs.access_token != '') {
          this.loginService.setUserLogado(rs);
          this.appGlobals.usuario = rs.user;
          this.appGlobals.authorization = rs.access_token;
          this.router.navigate(['/controle']);
        }
      })
      .catch(() => {
        this.loginService.setUserLogado(false);
        this.router.navigate(['/login']);
      });
  }
}
