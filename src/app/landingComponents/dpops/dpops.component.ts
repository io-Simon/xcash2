import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-dpops',
  templateUrl: './dpops.component.html',
  styleUrls: ['./dpops.component.scss']
})
export class DpopsComponent implements OnInit {

  options: AnimationOptions = {
    path: '../assets/documents/vote_dark.json',
  };

  constructor() { }

  ngOnInit(): void {
  }
  public screenWidth: number = screen.width
}
