import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  temas:any[]=[
    {id:"1",nombre:"Pasado Simple"},
    {id:"2",nombre:"Pasado Continuo"},
    {id:"3",nombre:"Pasado Perfecto Simple"},
    {id:"4",nombre:"Pasado Perfecto Continuo"},
    {id:"5",nombre:"Condicional perfecto"}
  ];

  constructor( private router: Router ) { }



  ngOnInit(): void {
    //
  }

  selectTopic(index:number){
    //
  }

  openModal() {
    //this.modalRef = this.modalService.open(ModalComponent)
  }
  closeModal() {
    // this.modalService.close(id);
  }
//   modalRef(){
//   }

 }
