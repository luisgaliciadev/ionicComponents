import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infinitescroll: IonInfiniteScroll;
  public title: string;
  public data: any[] = Array(20);

  constructor() {
    this.title = 'Infinite Scroll';
   }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Load next');

    if (this.data.length > 50) {
      event.target.complete();
      this.infinitescroll.disabled = true;
      return;
    }
    
    setTimeout( () => {
      const nData = Array(20);
      this.data.push( ...nData);
      event.target.complete();
    }, 1000);
  }

}
