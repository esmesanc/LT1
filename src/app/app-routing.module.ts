import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DificultadComponent } from './component/dificultad/dificultad.component';
import { PreguntasComponent } from './component/preguntas/preguntas.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path:'register', component:RegisterComponent},
{path: 'principal', component: PrincipalComponent},
{path: 'preguntas/:topic/:dificultad', component: PreguntasComponent},
{path: 'dificultad/:topic', component: DificultadComponent},
{ path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
