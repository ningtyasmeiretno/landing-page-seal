import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners = [
    {
      images: '../../../assets/images/logo-brawijaya.png',
      link: 'https://ub.ac.id/id/'
    },
    {
      images: '../../../assets/images/logo-polinema.png',
      link: 'https://www.polinema.ac.id/'
    },
    {
      images: '../../../assets/images/Padjadjaran.png',
      link: 'https://www.unpad.ac.id/'
    },
    {
      images: '../../../assets/images/PIS.png',
      link: 'https://profileimage.studio/'
    },
    {
      images: '../../../assets/images/logo-jatim.png',
      link: 'https://www.jatimprov.go.id/'
    },
    {
      images: '../../../assets/images/logo-batu.png',
      link: 'https://www.batukota.go.id/'
    },
    {
      images: '../../../assets/images/logo-malang.png',
      link: 'https://malangkota.go.id/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
