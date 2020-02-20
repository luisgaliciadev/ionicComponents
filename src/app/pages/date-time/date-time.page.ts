import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  public title: string;
  public fechaNaci: Date = new Date();
  public customPickerOptions;
  public customDate;

  constructor() { 
    this.title = 'Calendario';

    
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento)
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioFecha(event) {
    console.log(event);
    console.log('date: ', new Date(event.detail.value) );
  }

}
