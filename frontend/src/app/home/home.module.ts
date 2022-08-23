import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ProgrammesModule } from '../partial/programmes/programmes.module';
import { PagesModule } from '../pages.module';


const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PagesModule,
    ProgrammesModule
  ]
})
export class HomeModule { }
