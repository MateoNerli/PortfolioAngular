import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class Navbar implements OnInit {

  public isMenuOpen: boolean = false;

  ngOnInit(): void {
  }


  setMenuOpen() : void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
  
}
