import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() nombre;
  @Input() pais;

  constructor(
    public _modalController: ModalController
  ) { }

  ngOnInit() {
  }

  salirSa() { 
    this._modalController.dismiss();
  }

  salirCa() {
    this._modalController.dismiss({
      nombre: 'Luciano',
      pais: 'USA'
    });
  }

}
