import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    'angular',
    'rxjs',
    'nodejs',
    'typescript',
    'sass',
    'html5',
    'google',
    'kubernetes'
  ];

  constructor() {}

  ngOnInit() {}
}
