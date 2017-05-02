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
  selectedItem: any;
  icons: string[];
  names: string[];
  phones: string[];
  items: Array<{title: string, note: string, icon: string}>;

  appoiment = {
   name: "",
   number: "",
   info:""
  };





  constructor(public navCtrl: NavController, public navParams: NavParams, public calendar: Calendar, private datePicker: DatePicker ) {


    this.calendar.createCalendar('NoiProgramari').then(
     (msg) => { console.log(msg); },
     (err) => { console.log(err); }
   );


  }



  // CODE FOR LOCAL CALENDAR _ IT CAB ONLY CREATES CALENDAR BUT IT CANT ADD EVENTS ON S7


   startDate(){
      this.datePicker.show({
        date: new Date(),
        mode: 'datetime',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
        allowOldDates: false
      }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }


   endDate(){
      this.datePicker.show({
        date: new Date(),
        mode: 'datetime',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
        allowOldDates: false
      }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }




   addAppoiment(){

    this.calendar.requestWritePermission()
    //this.calendar.createEvent(this.appoiment.name, this.appoiment.number, this.appoiment.info, this.appoiment.startDate, this.appoiment.endDate);
    //alert('Data de inceput: ' + this.appoiment.startDate);
    //alert('Data de sfarsit: ' + this.appoiment.endDate);
   };


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
