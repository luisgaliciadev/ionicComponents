import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

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
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this.getUsers();
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
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log('share', user);
    this.lista.closeSlidingItems();
  }

  delete(user) {
    console.log('delete', user);
    this.lista.closeSlidingItems();
  }
}
