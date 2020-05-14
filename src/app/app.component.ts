import { Component } from '@angular/core';
import { GoogleAnalytics } from './resources/google-Analytics.resource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    GoogleAnalytics.initFirebase();
    GoogleAnalytics.sendEventFirebase('ga_event', 'Home', 'inicio de la aplicacion', 'Home');
  }

}
