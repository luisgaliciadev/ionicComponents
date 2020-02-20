import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  title = 'Modal';

  constructor(
    public _modalController: ModalController
  ) { }

  ngOnInit() {
  }
  
  async abrirModal() {
    const modal = await this._modalController.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'Luis Galicia',
        'pais': 'Venezuela',
      }
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log(data);
  }
}
