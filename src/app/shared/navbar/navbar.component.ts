import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { MatSidenav } from '@angular/material/sidenav';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})

export class NavbarComponent implements OnInit{
  public screenWidth: number = screen.width
  options: AnimationOptions = {
    path: '../assets/documents/boysit_cropped.json',
  };

  @ViewChild('sidenav') sidenav!: MatSidenav;

  sideNavOpenedBool = false;
  toolsBool = false;
  mobileToolsBool = false;

  toggleSidenav() {
    this.sideNavOpenedBool = true
    let sideNavClosedBool = this.sideNavOpenedBool
    let matMenu = undefined;
    if(this.sideNavOpenedBool){
      matMenu = document.getElementById('matMenu')!.style.transform = 'rotate(90deg)';
    }
    
    function reverseAnimation(){
      if(!sideNavClosedBool){
        matMenu = document.getElementById('matMenu')!.style.transform = 'rotate(-180deg)'
      }
    }

    setTimeout(() => {
      this.sidenav.toggle();
      this.sideNavOpenedBool = false;
      sideNavClosedBool = this.sideNavOpenedBool;
      setTimeout(() => {
        reverseAnimation()
      }, 200); 
    }, 300); 
  }

  NavigateToRoute(argument:string){
    this.router.navigate([argument])
  }

 

  revealTools(){
    this.toolsBool = !this.toolsBool;
    this.service.changeBool(this.toolsBool)
  }


  constructor( private router: Router, private service: CommonService) { }

  ngOnInit(): void {}


  mobileToolsToggle(){
    this.mobileToolsBool = !this.mobileToolsBool
  }

}
