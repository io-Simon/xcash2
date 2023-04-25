import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-private-stake',
  templateUrl: './private-stake.component.html',
  styleUrls: ['./private-stake.component.scss']
})
export class PrivateStakeComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/vote_dark.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
