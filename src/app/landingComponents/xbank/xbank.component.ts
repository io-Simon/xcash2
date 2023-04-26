import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-xbank',
  templateUrl: './xbank.component.html',
  styleUrls: ['./xbank.component.scss']
})
export class XbankComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/card_dark.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
