import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-sidechain',
  templateUrl: './sidechain.component.html',
  styleUrls: ['./sidechain.component.scss']
})
export class SidechainComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/data_dark.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
