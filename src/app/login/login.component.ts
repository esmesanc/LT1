import { Component, OnInit } from '@angular/core';
import { ConsoleLogger } from '@angular/compiler-cli/private/localize';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

usuario={
  email:'',
  password:''
}
  constructor(private authService: AuthService, private router: Router ){

  }
  ngOnInit(){}

Ingresar(){
  console.log(this.usuario);
  const {email,password }=this.usuario;
  this.authService.login(email,password).then( res=>{
    console.log("ingreso como: ", res);
    this.router.navigate(['/principal']);
  }).catch(err => {
    console.log('Usuario o Contrasena incorrecto: ', err.message);
  });
}
IngresaConGoogle(){
  console.log(this.usuario);
  const {email,password }=this.usuario;
  this.authService.loginWithGoogle(email,password).then( res=>{
    console.log("ingredo como: ", res);
    this.router.navigate(['/principal']);
  }).catch(err => {
    console.log('Usuario o Contrasena incorrecto: ', err.message);
  });
}

}

