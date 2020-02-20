import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public componentes: Observable<Componente[]>;

  constructor(
    private _menu: MenuController,
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this.componentes = this._dataService.getMenuOpts();
  }

  togggleMenu() {
    this._menu.toggle();
  }

}
