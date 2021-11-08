import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {
  screenHeight: string = '900px';
  @HostListener('window:resize', ['$event'])
  getScreenHeight() {
    this.screenHeight = `${window.innerHeight - 240}px`;
    // console.log(window.innerHeight);

  }

  constructor() { 
    this.getScreenHeight();
  }

  ngOnInit(): void {
  }

}
