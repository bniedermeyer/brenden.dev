import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    'angular',
    'express',
    'google',
    'html5',
    'nodejs',
    'sass',
    'typescript'
  ];

  constructor() {}

  ngOnInit() {}
}
