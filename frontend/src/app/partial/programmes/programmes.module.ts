import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammesComponent } from './programmes.component';
import { SwiperModule } from 'swiper/angular';
import { MatTabsModule } from '@angular/material/tabs';
// import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    ProgrammesComponent
  ],
  imports: [
    CommonModule,
SwiperModule,MatTabsModule
    
  ],
  exports:[
    ProgrammesComponent
  ]
})
export class ProgrammesModule { }
