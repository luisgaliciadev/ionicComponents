import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  title = 'Lista - Sliding';
  users;
  @ViewChild('lista', {static: false}) lista: IonList;

  constructor(
    private _dataService: DataService,
    private _toastController: ToastController
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this._toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  getUsers() {
      this._dataService.getUsers().subscribe(
        (response: any) => {
          this.users = response
          console.log(response);
        }
      );
  }

  favorite(user) {
    this.presentToast('Guaradados en Favoritos.');
    // console.log('favorite', user);
    this.lista.closeSlidingItems();
  }

  share(user) {
    // console.log('share', user);
    this.presentToast('Datos Compartidos Correctamente.');
    this.lista.closeSlidingItems();
  }

  delete(user) {
    this.presentToast('Datos Borrados Correctamente.');
    console.log('delete', user);
    this.lista.closeSlidingItems();
  }
}
