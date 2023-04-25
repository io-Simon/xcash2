import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-wallet-landing',
  templateUrl: './wallet-landing.component.html',
  styleUrls: ['./wallet-landing.component.scss']
})
export class WalletLandingComponent implements OnInit {
  public screenWidth: number = screen.width
  optionsLeft: AnimationOptions = {
    path: '../assets/documents/atmNew.json',
  };

  optionsRight: AnimationOptions = {
    path: '../assets/documents/atmNewBlue.json',
  };


  constructor() { }

  ngOnInit(): void {
 
  }

}
