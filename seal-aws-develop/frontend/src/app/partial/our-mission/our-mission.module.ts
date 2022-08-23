import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurMissionComponent } from './our-mission.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    OurMissionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    OurMissionComponent
  ]
})
export class OurMissionModule { }
