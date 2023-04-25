import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-xpayment',
  templateUrl: './xpayment.component.html',
  styleUrls: ['./xpayment.component.scss']
})
export class XpaymentComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/data_dark.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
