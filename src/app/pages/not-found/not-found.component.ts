import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
//import { DiscoverComponent } from 'src/app/sections/discover/discover.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],

})
export class NotFoundComponent implements OnInit {

  options: AnimationOptions = {
    path: '../assets/documents/boysit_cropped.json',

  };

  options2: AnimationOptions = {
    path: '../assets/documents/manphone_dark.json',
  };

  options3: AnimationOptions = {
    path: '../assets/documents/demo-left-right_dark_nogrid_noboy.json',
  };
  options4: AnimationOptions = {
    path: '../assets/documents/womanread_dark.json',
  };

  options5: AnimationOptions = {
    path: '../assets/documents/xleaf.json',
  };

  



  public show:boolean = false;
  public buttonName:any = 'Discover X-Cash';

  constructor( ) { }

  buttonFlag : boolean = true

  buttonDisappear(){
    this.buttonFlag = !this.buttonFlag
  }


scroll(el: HTMLElement) {
  el.scrollIntoView({behavior: 'smooth'});
}

flag:boolean = true

  ngOnInit(): void {
  }

}
