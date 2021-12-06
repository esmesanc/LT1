import { Component, HostListener, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { async } from '@firebase/util';

interface Token{
  token:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e: { preventDefault: () => void; }) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }

  private tokenColection: AngularFirestoreCollection<Token>

  constructor(
    private mes: AngularFireMessaging,
    private db: AngularFirestore,
  ) {
    this.tokenColection=db.collection<Token>('tokens');
  }

  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
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
