import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albumes: any[] = [];
  txtBuscar = '';

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    
    this.albumes = this._dataService.albumes;
    console.log(this.albumes);
    // this._dataService.getAlbumes().subscribe(
    //   (response: any) => {
    //     console.log('response: ', response);
    //     this.albumes = response;
    //     console.log('this.albumes: ', this.albumes);
    //   }
    // );
  }

  buscar(ev) {
    // console.log(ev);
    this.txtBuscar = ev.detail.value;
  }
}
