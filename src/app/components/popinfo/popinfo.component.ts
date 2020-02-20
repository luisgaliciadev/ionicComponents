import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  items = Array(40);

  constructor(
    private _popoverController: PopoverController
  ) { }

  ngOnInit() {}

  onClick(valor) {
    console.log(valor);
    this._popoverController.dismiss({
      item: valor
    }); 

  }

}
