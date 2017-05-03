import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Calendar, DatePicker]
})
export class ListPage {
  startDate: any;
  endDate: any;

  appoiment = {
   name: "",
   number: "",
   info:"",
   //startDate: new Date(),
   //endDate: new Date()
  };




  constructor(public navCtrl: NavController, public navParams: NavParams, public calendar: Calendar, private datePicker: DatePicker ) {

    this.calendar.createCalendar('NoiProgramari').then(
     (msg) => { console.log(msg); },
     (err) => { console.log(err); }
   );
  }







   addAppoiment(){

    this.calendar.requestWritePermission()
    this.calendar.createEvent(this.appoiment.name, this.appoiment.number, this.appoiment.info, this.startDate, this.endDate);
    console.log('Data de inceput: ' , this.startDate);
    console.log('Data de sfarsit: ' , this.endDate);
   };



  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
