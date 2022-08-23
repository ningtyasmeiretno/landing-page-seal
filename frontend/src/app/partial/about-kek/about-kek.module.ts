import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutKekComponent } from './about-kek.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  {
    path : '',
    component: AboutKekComponent
  }
]

@NgModule({
  declarations: [
    AboutKekComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    FooterModule
  ],
  exports:[
    AboutKekComponent
  ]
})
export class AboutKekModule { }
