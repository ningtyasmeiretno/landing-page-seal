import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path:'about-kek',
    loadChildren:() => import ('./partial/about-kek/about-kek.module').then(m => m.AboutKekModule)
  },
  {
    path:'team-detail',
    loadChildren:() => import ('./partial/team-detail/team-detail.module').then(m => m.TeamDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
