import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamModule } from './partial/team/team.module';
import { PartnersModule } from './partial/partners/partners.module';
import { ContactModule } from './partial/contact/contact.module';
import { AboutModule } from './partial/about/about.module';
import { HeroModule } from './partial/hero/hero.module';
import { FooterModule } from './partial/footer/footer.module';
import { OurMissionModule } from './partial/our-mission/our-mission.module';
import { FAQModule } from './partial/faq/faq.module';
import { TeamDetailModule } from './partial/team-detail/team-detail.module';
import { NavbarModule } from './partial/navbar/navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    TeamModule,
    PartnersModule,
    ContactModule,
    AboutModule,
    HeroModule,
    FooterModule,
    OurMissionModule,
    FAQModule
  ],
  exports:[
    NavbarModule,
    TeamModule,
    PartnersModule,
    ContactModule,
    AboutModule,
    HeroModule,
    FooterModule,
    OurMissionModule,
    FAQModule
  ]
})
export class PagesModule{ }
