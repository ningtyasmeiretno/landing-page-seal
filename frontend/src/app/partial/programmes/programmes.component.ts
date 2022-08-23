import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgrammesComponent implements OnInit {
  education= [
    {
      img: '../../../assets/images/National Hackathon Poster 2.png',
      title: 'NATIONAL HACK',
      desk: 'Hackatones yang Diadakan oleh Universitas Padjajaran'
    }
]

health= [
  {
    img: '../../../assets/images/hackathones_itb.png',
    title: 'HACKATONES ITB',
    desk: 'Hackatones yang Diadakan oleh Institut Teknologi Bandung'
  }
]

  smart= [
    {
      img: '../../../assets/images/Box.png',
      title: 'AWAS E',
      desk: 'Solusi untuk Pemerintah Kota Batu'
    },
    {
      img: '../../../assets/images/siter.png',
      title: 'SITER',
      desk: 'Sistem Informasi Kinerja Terminal Tipe B Dishub Jawa Timur'
    }
  ]

  business= [
    {
      img: '../../../assets/images/bapenda.png',
      title: 'BAPPENDA POS',
      desk: 'Sistem Informasi Point of Sales untuk Wajib Pajak Pemerintah Kota Malang'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
