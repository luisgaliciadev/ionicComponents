import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Cards';
   }

  ngOnInit() {
  }

}
