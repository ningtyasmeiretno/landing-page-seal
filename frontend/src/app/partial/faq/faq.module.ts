import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQComponent } from '../faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    FAQComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports : [
    FAQComponent
  ]
})
export class FAQModule {}
