import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-project-landing',
  templateUrl: './project-landing.component.html',
  styleUrls: ['./project-landing.component.scss']
})
export class ProjectLandingComponent implements OnInit {
  public screenWidth: number = screen.width
  optionsLeft: AnimationOptions = {
    path: '../assets/documents/paper2.json',
  };

  optionsRight: AnimationOptions = {
    path: '../assets/documents/paperBlue.json',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
