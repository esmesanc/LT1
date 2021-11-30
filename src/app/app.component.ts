import { ConsoleLogger } from '@angular/compiler-cli/private/localize';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
usuario={
  email:'',
  password:''
}
  constructor(private authService: AuthService){

  }

Ingresar(){
  console.log(this.usuario);
  const {email,password }=this.usuario;
  this.authService.register(email,password).then( res=>{
    console.log("Se registro: ", res);
  })
}
IngresaConGoogle(){
  console.log(this.usuario);
  const {email,password }=this.usuario;
  this.authService.loginWithGoogle(email,password).then( res=>{
    console.log("Se registro: ", res);
  })
}
}
