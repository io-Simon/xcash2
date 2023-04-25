import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-bullet-features',
  templateUrl: './bullet-features.component.html',
  styleUrls: ['./bullet-features.component.scss']
})
export class BulletFeaturesComponent implements OnInit {

  public screenWidth: number = screen.width
  
  options: AnimationOptions = {
    path: '../assets/documents/Lottie_xcash_dev_dark_nogrid_cropped.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
