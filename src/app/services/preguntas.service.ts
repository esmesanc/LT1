import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { preguntitas } from '../interfaces/preguntitas.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private preguntasCollection: AngularFirestoreCollection<preguntitas>;
  private preguntas: Observable<preguntitas[]>;

  constructor(private db:AngularFirestore) {
    this.preguntasCollection=db.collection<preguntitas>('preguntitas');
    this.preguntas=this.preguntasCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data =a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id, ...data}

        })
      }
    ))

   }
   getallpreguntas(){
     return this.preguntas;
   }
   getpregunta(topic:number,dificultad:string){
    return this.preguntasCollection=this.db.collection('preguntitas', ref=>ref
    .where('dificultad', '==', dificultad).where('topic', '==', topic));
    // this.preguntas = this.preguntasCollection.snapshotChanges().pipe(map(
    //   actions=>{
    //     return actions.map(a=>{
    //       const data =a.payload.doc.data();
    //       const id=a.payload.doc.id;
    //       return {id, ...data}
    //     })
    //   }

    // ))

      //  return this.preguntas;

   }

}
