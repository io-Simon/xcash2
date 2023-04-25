import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/chartGridLess.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
