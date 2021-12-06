import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { preguntitas } from 'src/app/interfaces/preguntitas.interface';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  pregunta: preguntitas = {
    correcta: '',
    pregunta: '',
    respuesta1: '',
    respuesta2: '',
    respuesta3: '',
    respuesta4: '',
    dificultad: '',
    topic: '',
  };
  preguntaId:any;
  dificultadid: string;
  topicid: string;
  preguntas: preguntitas[];
  contestado:boolean;
  incorrect:boolean;
  title:string;
  subtitle:string;

  constructor(
    private ps: PreguntasService,
    private ar: ActivatedRoute,
    private spin: NgxSpinnerService
  ) {
    this.topicid = this.ar.snapshot.params['topic'];
    this.dificultadid = this.ar.snapshot.params['dificultad'];
    this.preguntas = [];
    this.preguntaId=null;
    this.contestado=false
    this.incorrect=true;
    this.title='';
    this.subtitle='';
  }

  ngOnInit(): void {
    this.ps.getpregunta(this.topicid, this.dificultadid).subscribe((res) => {
      const numeroRandom=Math.floor(Math.random() * res.length);
      this.pregunta=res[numeroRandom];
      console.log(this.preguntaId);
      this.preguntaId = this.pregunta.id;
      console.log(this.preguntaId);
    });
  }

  revisar(respuesta: string, correcta: string) {
    this.contestado=true;
    if (respuesta == correcta) {
      this.incorrect=false;
      this.title='Excelente';
      this.subtitle='Bien contestado';
    } else {
      this.incorrect=true;
      this.title='Ups respuesta incorrecta';
      this.subtitle='La respuesta correcta era: '+correcta;
    }
  }

  recargar(){
    window.location.reload();
  }
}
