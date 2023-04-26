import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-public-tx2',
  templateUrl: './public-tx2.component.html',
  styleUrls: ['./public-tx2.component.scss']
})
export class PublicTX2Component implements OnInit {

  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/boysit_cropped.json', 
  };

  constructor() { }

  ngOnInit(): void {
  }

}
