import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  public title: string;
  public data = Array(100);

  constructor() {
    this.title = 'Fabs';
   }

  ngOnInit() {
  }

}
