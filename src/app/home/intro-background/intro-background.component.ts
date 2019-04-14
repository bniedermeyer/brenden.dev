import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-background',
  templateUrl: './intro-background.component.html',
  styleUrls: ['./intro-background.component.scss']
})
export class IntroBackgroundComponent implements OnInit {
  rotatePlanet = false;
  constructor() {}

  ngOnInit() {}

  toggleSpin() {
    this.rotatePlanet = true;
  }
}
