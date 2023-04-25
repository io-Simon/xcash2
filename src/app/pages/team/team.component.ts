import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  options: AnimationOptions = {
    path: '../assets/documents/team_gears.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
