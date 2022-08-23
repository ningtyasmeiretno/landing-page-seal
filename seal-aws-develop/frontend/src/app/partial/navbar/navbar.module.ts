import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
