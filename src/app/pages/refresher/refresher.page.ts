import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  title = 'Refresher';
  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(ev) {
    console.log(ev);

    setTimeout( () => {

      this.items = Array(40);
      ev.target.complete();
    }, 1500);
  }
}
