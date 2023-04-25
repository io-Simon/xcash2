import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-wallet',
  templateUrl: './main-wallet.component.html',
  styleUrls: ['./main-wallet.component.scss']
})
export class MainWalletComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    this.bottomNav.nativeElement.style.opacity = 0
  }

  @HostListener('window:scroll', ['$event'])
  @ViewChild('bottomNav', {static: true}) bottomNav! : ElementRef;
  @ViewChild('desktop', {static: true}) desktop! : ElementRef;
  @ViewChild('mobile', {static: true}) mobile! : ElementRef;
  @ViewChild('paper', {static: true}) paper! : ElementRef;
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
    const desktop = this.desktop.nativeElement.getBoundingClientRect();
    const mobile = this.mobile.nativeElement.getBoundingClientRect();
    const paper = this.paper.nativeElement.getBoundingClientRect();
    const gofurther = this.gofurther.nativeElement.getBoundingClientRect();

    let WhoIsTop = ''
    switch (true) {
      case desktop.top >= 0 && desktop.top <= window.innerHeight:
        WhoIsTop = 'desktop'
        break;
      case mobile.top >= 0 && mobile.top <= window.innerHeight:
        WhoIsTop = 'mobile'
        break;
      case paper.top >= 0 && paper.top <= window.innerHeight:
        WhoIsTop = 'paper'
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
