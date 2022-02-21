import { Component, OnInit } from '@angular/core';
import { endpoints } from 'src/app/utils/endpoints';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  path = endpoints;

  ngOnInit(): void {}
}
