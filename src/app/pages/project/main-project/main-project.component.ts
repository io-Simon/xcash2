import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-main-project',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.scss']
})
export class MainProjectComponent implements OnInit {

  constructor(private service: CommonService) { }
  ngOnInit(): void {
    this.service.shouldLoaderMethod(false)
    this.bottomNav.nativeElement.style.opacity = 0
  }

  @HostListener('window:scroll', ['$event'])
  @ViewChild('bottomNav', {static: true}) bottomNav! : ElementRef;
  @ViewChild('background', {static: true}) background! : ElementRef;
  @ViewChild('governance', {static: true}) governance! : ElementRef;
  @ViewChild('tech', {static: true}) tech! : ElementRef;
  @ViewChild('roadmap', {static: true}) roadmap! : ElementRef;
  @ViewChild('coin', {static: true}) coin! : ElementRef;
  @ViewChild('gofurther', {static: true}) gofurther! : ElementRef;
 

  lastScrollTop = 0; // for onScroll method
  arrowClickedBool: boolean = false;

  scrollToSection(section: ElementRef | HTMLElement){
    if (section instanceof ElementRef) {
      section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  onScroll(event:any){
    //to hide bottomNav when scroll on landing
    const scrollTop = event.target.scrollTop;

    if (scrollTop <= 100) {
      this.bottomNav.nativeElement.style.opacity = '0'
    }
    if (scrollTop > 100){
      this.bottomNav.nativeElement.style.opacity = '1'
    }
    this.lastScrollTop = scrollTop;
  }

  checkIfAtTopOfPage() {
    const background = this.background.nativeElement.getBoundingClientRect();
    const governance = this.governance.nativeElement.getBoundingClientRect();
    const tech = this.tech.nativeElement.getBoundingClientRect();
    const roadmap = this.roadmap.nativeElement.getBoundingClientRect();
    const coin = this.coin.nativeElement.getBoundingClientRect();
    const gofurther = this.gofurther.nativeElement.getBoundingClientRect();

    let WhoIsTop = ''
    switch (true) {
      case background.top >= 0 && background.top <= window.innerHeight:
        WhoIsTop = 'background'
        break;
      case governance.top >= 0 && governance.top <= window.innerHeight:
        WhoIsTop = 'governance'
        break;
      case tech.top >= 0 && tech.top <= window.innerHeight:
        WhoIsTop = 'tech'
        break;
      case roadmap.top >= 0-200 && roadmap.top <= window.innerHeight:
        WhoIsTop = 'roadmap'
        break;
      case coin.top >= 0 && coin.top <= window.innerHeight:
        WhoIsTop = 'coin'
        break;
      case gofurther.top >= 0 && gofurther.top <= window.innerHeight:
        WhoIsTop = 'gofurther'
        break;

      default:
        break;
    }
    return WhoIsTop;
  }

  onWindowScroll() {
    const isAtTopOfPage = this.checkIfAtTopOfPage();

    const allOtherButtons = document.querySelectorAll('button');
    allOtherButtons.forEach((button) => {
      button.style.background = '#1f1f1f';
      button.style.color = '#fa741c';
    });

    if (isAtTopOfPage) {
      const element = document.getElementById(isAtTopOfPage +'Button')! as HTMLElement 
      element.style.background = 'white'; 
      element.style.color = '#1f1f1f'; 
   
    }
  }



}
