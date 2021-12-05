import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dificultad',
  templateUrl: './dificultad.component.html',
  styleUrls: ['./dificultad.component.css']
})
export class DificultadComponent implements OnInit {
topicid: null;
  constructor( private router: Router, private ar: ActivatedRoute) {
    this.topicid= this.ar.snapshot.params['topic'];
  }

  ngOnInit(): void {
    this.topicid= this.ar.snapshot.params['topic'];
  }

  enviar(dificultad:string){
    console.log(this.topicid+dificultad);
    this.router.navigate(['/preguntas',this.topicid, dificultad]);
  }

}
