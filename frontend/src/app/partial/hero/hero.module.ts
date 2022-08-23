import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroIlustrationComponent } from './hero-ilustration/hero-ilustration.component';



@NgModule({
  declarations: [
    HeroComponent,
    HeroIlustrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroComponent
  ]
})
export class HeroModule { }
