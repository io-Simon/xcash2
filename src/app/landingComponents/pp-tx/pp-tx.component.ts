import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-pp-tx',
  templateUrl: './pp-tx.component.html',
  styleUrls: ['./pp-tx.component.scss']
})
export class PpTxComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/card_dark.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
