import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  public title: string;

  constructor() {
    this.title = 'grids'; 
   }

  ngOnInit() {
  }

}
