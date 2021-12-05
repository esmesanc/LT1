import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { preguntitas } from 'src/app/interfaces/preguntitas.interface';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  pregunta:preguntitas={
  correcta: '',
  pregunta: '',
  respuesta1: '',
  respuesta2: '',
  respuesta3: '',
  respuesta4: '',
  dificultad: '',
  topic: 0,
  }
  dificultadid:string;
  topicid:number;
  preguntas!: preguntitas[];

  constructor(private ps:PreguntasService, private ar:ActivatedRoute) {

    this.topicid= this.ar.snapshot.params['topic'];
    this.dificultadid= this.ar.snapshot.params['dificultad'];
  }

  ngOnInit(): void {
    this.topicid= this.ar.snapshot.params['topic'];
    this.dificultadid= this.ar.snapshot.params['dificultad'];
    this.ps.getpregunta(this.topicid,this.dificultadid)
    // .subscribe(res=>{
    //   this.preguntas=res;
    //   console.log(this.preguntas);
    // })
  }
  revisar(respuesta:string, correcta: string){
    if(respuesta==correcta){
      console.log('respuesta correcta');
    }else{
      console.log('Respuesta incorrecta');
    }
  }

}
