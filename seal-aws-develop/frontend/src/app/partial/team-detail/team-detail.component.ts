import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  team= [
    {
      img: '../../../assets/images/committe/pak_arief.png',
      name: 'Dr. Ir. Arief Yahya, M.Sc',
      position: 'Chairman SEAL'
    },
    {
      img: '../../../assets/images/committe/priyantono.png',
      name: 'Dr. Priyantono Rudito',
      position: 'Vice Chairman SEAL'
    },
    {
      img: '../../../assets/images/committe/pak_david.png',
      name: 'KRAT David Santoso KR',
      position: 'CEO SEAL'
    },
]
team2=[
  {
    img: '../../../assets/images/committe/om_amar.png',
    name: 'Amar Alpabet',
    position: 'Lead Startup '
  },{
    img: '../../../assets/images/committe/nia-limanto.png',
    name: 'Nia Limanto',
    position: 'Project Manager'
  }
]



  constructor() { }

  ngOnInit(): void {
  }

}
