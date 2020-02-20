import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    public _popoverController: PopoverController
  ) { }

  ngOnInit() {
  }


  async presentPopover(ev: any) {
    const popover = await this._popoverController.create({
      component: PopinfoComponent,
      event: ev,
      mode: 'ios',
      //translucent: true,
      // backdropDismiss: false
    });
    await popover.present();
    
    //const {data} = await popover.onDidDismiss(); // Despues de cerrarce
    const {data} = await popover.onWillDismiss(); // Antes de cerrarce
    console.log(data);
  }
}
