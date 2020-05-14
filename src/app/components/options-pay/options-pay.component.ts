import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-options-pay',
  templateUrl: './options-pay.component.html',
  styleUrls: ['./options-pay.component.scss']
})
export class OptionsPayComponent implements OnInit {

  showGoogleAuthentication: boolean;

  constructor() {
    this.showGoogleAuthentication = false;
  }

  ngOnInit() {
  }

  validateClick(type: string) {
    console.log(type);
  }

}
