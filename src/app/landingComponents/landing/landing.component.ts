import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private service : CommonService) {this.windowWidth = window.innerWidth; }

  ngBoolForAnimationDelay = this.service.shouldLoaderBool

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.windowWidth = event.target.innerWidth;
  }

  ngOnInit(): void {
    const Animatedlogo = document.getElementById('Animatedlogo');
    const NoDelayAnimatedlogo = document.getElementById('Animatedlogo');
    const NoDelayMobileAnimatedlogo = document.getElementById('NoDelayMobileAnimatedlogo');

      setTimeout(() => {
        if(Animatedlogo){
          Animatedlogo!.style.transition = 'opacity ease 1.5s'
          Animatedlogo!.style.opacity= '0';
        }
        if(NoDelayAnimatedlogo){
          NoDelayAnimatedlogo!.style.transition = 'opacity ease 1.5s'
          NoDelayAnimatedlogo!.style.opacity= '0';
        }
    }, 5500);


      setTimeout(() => {
        if(NoDelayMobileAnimatedlogo){
          NoDelayMobileAnimatedlogo!.style.transition = 'opacity ease 1.5s'
          NoDelayMobileAnimatedlogo!.style.opacity= '0';
        }
      }, 3500);
    
  }

  optionsLeft: AnimationOptions = {
    path: '../assets/documents/jumbotron_dark_nogrid_nodownman_colors.json',
  };

  optionsRight: AnimationOptions = {
    path: '../assets/documents/jumbotron-blue.json',
  };

  @Output() public SendBoolToParent = new EventEmitter()

  arrowClickedBool: boolean = false

  scrollToNextSection(){
    this.arrowClickedBool = !this.arrowClickedBool;
    this.SendBoolToParent.emit(this.arrowClickedBool);
    this.arrowClickedBool = false
  }

  public windowWidth: number;
  public screenWidth: number = screen.width

}
