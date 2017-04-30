import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SMS]
})
export class HomePage {


  text = {
    "number": "",
    "message": "",
  };

  constructor(public navCtrl: NavController, private sms: SMS) {
  }

  sendTextMessage() {
    this.sms.send(this.text.number, this.text.message);
    }



}
