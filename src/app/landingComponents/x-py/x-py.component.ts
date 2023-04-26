import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-x-py',
  templateUrl: './x-py.component.html',
  styleUrls: ['./x-py.component.scss']
})
export class XPyComponent implements OnInit {
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/boysit_cropped.json',
  };


  constructor() { }

  ngOnInit(): void {
  }

}
