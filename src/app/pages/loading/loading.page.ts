import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  title = 'Loading';
  loading: any;

  constructor(
    public _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading('Espere Por Favor...');
    setTimeout( () => {
      this.loading.dismiss();
    }, 1500);

    
    

  }

  async presentLoading(message: string) {
    this.loading = await this._loadingController.create({
      message: 'Please wait...',
      // duration: 2000
    });
    return this.loading.present();

    //const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }
  

}
