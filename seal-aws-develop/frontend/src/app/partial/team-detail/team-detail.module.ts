import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  {
    path : '',
    component: TeamDetailComponent
  }
]

@NgModule({
  declarations: [
    TeamDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    FooterModule
  ],
  exports:[
    TeamDetailComponent
  ]
})
export class TeamDetailModule { }
