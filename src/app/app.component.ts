import { Component, HostListener, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

interface Token{
  token:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private tokenColection: AngularFirestoreCollection<Token>

  constructor(
    private mes: AngularFireMessaging,
    private db: AngularFirestore,
  ) {
    this.tokenColection=db.collection<Token>('tokens');
  }

  ngOnInit(): void {
    this.requestPermission();
    this.listenNotifications();
  }

  requestPermission() {
    this.mes.requestToken.subscribe(token => {
      console.log(token);
      if(token){
        this.tokenColection.add({token});
      }
    });
  }

  listenNotifications() {
    this.mes.messages.subscribe((message) => {
      console.log(message);
    });
  }
}
