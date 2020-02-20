import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment, {static: false}) segment: IonSegment;
  title = 'Setment';
  superHeroes: Observable<any>;
  publisher = '';

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    // console.log(this.segment.value);
    this.superHeroes = this._dataService.getSuperHeroes();
    console.log(this.superHeroes);
  }

  segmentChanged(ev) {    
    const valSeg = ev.detail.value;

    if (valSeg === 'todos') {
      this.publisher = '';
    } else {
      this.publisher = valSeg;
    }   
    console.log( this.publisher);
  }
}
