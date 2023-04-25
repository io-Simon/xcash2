import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.scss']
})
export class FoundationComponent implements OnInit {

  options: AnimationOptions = {
    path: '../assets/documents/compositionrocket_dark_nogrid.json',
  };
  public screenWidth: number = screen.width
  constructor() { }

  ngOnInit(): void {
  }

}
