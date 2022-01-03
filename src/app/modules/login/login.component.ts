import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  acessar() {
    this.loginService.login(this.email, this.password)
      .then(rs => {
        this.loginService.setUserLogado(rs);
        console.log('rs:', rs);
      })
      .catch(erro => console.log('erro:', erro));
      this.loginService.setUserLogado(true);
      this.router.navigate(['/controle']);
  }
}
