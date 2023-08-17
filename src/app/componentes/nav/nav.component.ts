import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

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
    console.log("setMenuOpen");
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
