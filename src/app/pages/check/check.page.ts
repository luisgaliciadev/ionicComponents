import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  public title: string;
  public data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'danger',
      selected: true
    },
    {
      name: 'warning',
      selected: false
    }

  ];

  constructor() { 
    this.title = 'Check';
  }

  ngOnInit() {
  }

  onClick(check) {
    console.log(check)
  }

}
