import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent implements OnInit {
  public screenWidth: number = screen.width
  options2: AnimationOptions = {
    path: '../assets/documents/vote_dark.json',
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
