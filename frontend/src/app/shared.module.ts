import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { SwiperModule } from 'swiper/angular';
import { AboutKekModule } from './partial/about-kek/about-kek.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    SwiperModule,
  ],
  exports:[
    MatTabsModule,
    SwiperModule,

  ]
})
export class SharedModule { }
