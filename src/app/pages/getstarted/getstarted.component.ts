import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: '../assets/documents/compositionrocket.json',
  };
  
  options2: AnimationOptions = {
    path: '../assets/documents/download.json',
  };
  
  options3: AnimationOptions = {
    path: '../assets/documents/community.json"',
  };
  
  options4: AnimationOptions = {
    path: '../assets/documents/atm.json',
  };
  
  options5: AnimationOptions = {
    path: '../assets/documents/atm.json',
  };
  
  options6: AnimationOptions = {
    path: '../assets/documents/data---Copy.json',
  };
  

}
