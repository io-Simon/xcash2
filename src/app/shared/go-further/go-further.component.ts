import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-go-further',
  templateUrl: './go-further.component.html',
  styleUrls: ['./go-further.component.scss']
})
export class GoFurtherComponent implements OnInit {
  
  options: AnimationOptions = {
    path: '../assets/documents/manphone_dark.json',
  };
  
  options2: AnimationOptions = {
    path: '../assets/documents/manacademy_dark.json',
  };
  
  options3: AnimationOptions = {
    path: '../assets/documents/womanread_dark.json',
  };



  constructor() { }

  ngOnInit(): void {
  }

}
