import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/chartGridLess.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
