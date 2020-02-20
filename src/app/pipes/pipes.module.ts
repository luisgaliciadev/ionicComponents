import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [FiltroPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroPipe
  ]
})
export class PipesModule { }
