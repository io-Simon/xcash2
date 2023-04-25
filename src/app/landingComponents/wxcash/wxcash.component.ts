import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-wxcash',
  templateUrl: './wxcash.component.html',
  styleUrls: ['./wxcash.component.scss']
})
export class WxcashComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/data_dark.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
