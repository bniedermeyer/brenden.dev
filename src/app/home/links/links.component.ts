import { Component, OnInit } from '@angular/core';

import { links } from './link-config';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  links = links;
  constructor() {}

  ngOnInit() {}
}
