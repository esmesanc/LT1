import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


usuario={
  nombre:'',
  email:'',
  password:''
}
  constructor(private authService: AuthService){

  }
  ngOnInit(){}

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

