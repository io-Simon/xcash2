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
    path: '../assets/documents/Lottie_xcash_dev_dark_nogrid_cropped.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
