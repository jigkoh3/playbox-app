import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  screenHeight: string = '900px';
  @HostListener('window:resize', ['$event'])
  getScreenHeight() {
    this.screenHeight = `${window.innerHeight - 220}px`;
    // console.log(window.innerHeight);

  }

  constructor() { 
    this.getScreenHeight();
  }

  ngOnInit(): void {
  }

}
