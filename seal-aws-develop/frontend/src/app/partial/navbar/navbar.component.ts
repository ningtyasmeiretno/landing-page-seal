import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNav:boolean = false;
  constructor() { }

  ngOnInit():void{
  }
    openMenu(): void{
      this.showNav = !this.showNav
    }
  // @HostListener('window:click', [])
  // onWindowClick(){
    //this.document.getElementById('btnMenu').onclick

//     const button = document.getElementById("btnMenu");
//     const listMenu = document.getElementById("menu");
//     // const menuItem = document.getElementsByClassName("menu-item");
//     const menuItem = document.querySelector(".menu-item")

// // add event listeners
//     button?.addEventListener("click", () => {
//       listMenu?.classList.toggle("hidden");
//     });
    // menuItem?.addEventListener("click",()=>{
    //   console.log("ha");
    // })
    // menuItem.item.bind(addEventListener("click",()=>{
    //   console.log("ha");
      
    // }))

}
