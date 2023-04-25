import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-further',
  templateUrl: './further.component.html',
  styleUrls: ['./further.component.scss']
})
export class FurtherComponent implements OnInit {

  options2: AnimationOptions = {
    path: '../assets/documents/manphone.json',
  };
  
  options3: AnimationOptions = {
    path: '../assets/documents/manacademy.json"',
  };
  
  options4: AnimationOptions = {
    path: '../assets/documents/womanread.json',
  };
  
  options5: AnimationOptions = {
    path: '../assets/documents/jumbotron_dark_nogrid_nodownman_colors.json',
  };
  
  options6: AnimationOptions = {
    path: '../assets/documents/jumbotron_dark_nogrid_nodownman_colors.json',
  };
  


  constructor() { }

  ngOnInit(): void {
  }

}
