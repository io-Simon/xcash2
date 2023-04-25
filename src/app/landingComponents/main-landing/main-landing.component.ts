import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.scss']
})
export class MainLandingComponent implements OnInit {
  public screenWidth: number = screen.width
  constructor() { }
  ngOnInit(): void {
    this.bottomNav.nativeElement.style.opacity = 0
  }

  @HostListener('window:scroll', ['$event'])
  @ViewChild('bottomNav', {static: true}) bottomNav! : ElementRef;
  @ViewChild('landing', {static: true}) landing! : ElementRef;
  @ViewChild('overview', {static: true}) overview! : ElementRef;
  @ViewChild('flexx', {static: true}) flexx! : ElementRef;
  @ViewChild('dpops', {static: true}) dpops! : ElementRef;
  @ViewChild('pubx', {static: true}) pubx! : ElementRef;
  @ViewChild('ecox', {static: true}) ecox! : ElementRef;
  @ViewChild('stake', {static: true}) stake! : ElementRef;
  @ViewChild('xpayment', {static: true}) xpayment! : ElementRef;
  @ViewChild('xswap', {static: true}) xswap! : ElementRef;
  @ViewChild('wxcash', {static: true}) wxcash! : ElementRef;
  @ViewChild('xpy', {static: true}) xpy! : ElementRef;
  @ViewChild('sidechains', {static: true}) sidechains! : ElementRef;
  @ViewChild('foundation', {static: true}) foundation! : ElementRef;
  @ViewChild('metrics', {static: true}) metrics! : ElementRef;
  @ViewChild('gofurther', {static: true}) gofurther! : ElementRef;

  lastScrollTop = 0; // for onScroll method
  arrowClickedBool: boolean = false;

  bottomNavMethod(){
    if(this.bottomNav){
      this.bottomNav.nativeElement.style.opacity = '0'
    }
  }
 
  onScroll(event:any){
    //to hide bottomNav when scroll on landing
    const scrollTop = event.target.scrollTop;

    if (scrollTop <= 100) {
      if(this.bottomNav){
        this.bottomNav.nativeElement.style.opacity = '0'
      }
    }
    if (scrollTop > 100){
      if(this.bottomNav){
        this.bottomNav.nativeElement.style.opacity = '1'
      }
    }
    this.lastScrollTop = scrollTop;
  }
  scrollToSection(section: ElementRef | HTMLElement){
    if (section instanceof ElementRef) {
      section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  toScrollToOverviewSection(event: any){
    this.arrowClickedBool = event;
    if (this.arrowClickedBool){
      this.overview.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  checkIfAtTopOfPage() {
    const overview = this.overview.nativeElement.getBoundingClientRect();
    const flexx = this.flexx.nativeElement.getBoundingClientRect();
    const dpops = this.dpops.nativeElement.getBoundingClientRect();
    const pubx = this.pubx.nativeElement.getBoundingClientRect();
    const ecox = this.ecox.nativeElement.getBoundingClientRect();
    const stake = this.stake.nativeElement.getBoundingClientRect();
    const xpayment = this.xpayment.nativeElement.getBoundingClientRect();
    const xswap = this.xswap.nativeElement.getBoundingClientRect();
    const wxcash = this.wxcash.nativeElement.getBoundingClientRect();
    const xpy = this.xpy.nativeElement.getBoundingClientRect();
    const sidechains = this.sidechains.nativeElement.getBoundingClientRect();
    const foundation = this.foundation.nativeElement.getBoundingClientRect();
    const metrics = this.metrics.nativeElement.getBoundingClientRect();
    const gofurther = this.gofurther.nativeElement.getBoundingClientRect();
    let WhoIsTop = ''
    switch (true) {
      case overview.top >= 0 && overview.top <= window.innerHeight:
        WhoIsTop = 'overview'
        break;
      case flexx.top >= 0 && flexx.top <= window.innerHeight:
        WhoIsTop = 'flexx'
        break;
      case dpops.top+100 >= 0 && dpops.top <= window.innerHeight:
        WhoIsTop = 'dpops'
        break;
      case pubx.top >= 0 && pubx.top <= window.innerHeight:
        WhoIsTop = 'pubx'
        break;
      case ecox.top >= 0 && ecox.top <= window.innerHeight:
        WhoIsTop = 'ecox'
        break;
      case stake.top >= 0 && stake.top <= window.innerHeight:
        WhoIsTop = 'stake'
        break;
      case xpayment.top >= 0 && xpayment.top <= window.innerHeight:
        WhoIsTop = 'xpayment'
        break;
      case xswap.top >= 0 && xswap.top <= window.innerHeight:
        WhoIsTop = 'xswap'
        break;
      case wxcash.top >= 0 && wxcash.top <= window.innerHeight:
        WhoIsTop = 'wxcash'
        break;
      case xpy.top+450 >= 0 && xpy.top <= window.innerHeight:
        WhoIsTop = 'xpy'
        break;
      case sidechains.top+100 >= 0 && sidechains.top <= window.innerHeight:
        WhoIsTop = 'sidechains'
        break;
      case foundation.top+200 >= 0 && foundation.top <= window.innerHeight:
        WhoIsTop = 'foundation'
        break;
      case metrics.top+100 >= 0 && metrics.top <= window.innerHeight:
        WhoIsTop = 'metrics'
        break;
      case gofurther.top+100 >= 0 && gofurther.top <= window.innerHeight:
        WhoIsTop = 'gofurther'
        break;

      default:
        break;
    }
    return WhoIsTop;
  }

  onWindowScroll() {
    const isAtTopOfPage = this.checkIfAtTopOfPage();
    let capitalFirstLetter = isAtTopOfPage.charAt(0).toUpperCase()
    let restOfIsAtTop = isAtTopOfPage.substring(1)
    let capitalisAtTopOfPage = capitalFirstLetter + restOfIsAtTop
   
    const allOtherButtons = document.querySelectorAll('button');
    const allButtonSpans = document.querySelectorAll('button > span') as NodeListOf<HTMLElement>;;
    
    allOtherButtons.forEach((button) => {
      if(button){
        button.style.background = '#1f1f1f';
        button.style.color = '#fa741c';
      }
    }); 

    allButtonSpans.forEach((span) => {
      if(span){
        span.style.background = '#1f1f1f';
        span.style.color = '#fa741c';
      }
    }); 

    if (isAtTopOfPage) {
      const element = document.getElementById(isAtTopOfPage +'Button')! as HTMLElement 
      const mobileElement = document.getElementById('Mobile'+ capitalisAtTopOfPage +'ButtonSpan')! as HTMLElement
      if(element){
        element.style.background = 'white'; 
        element.style.color = '#1f1f1f'; 
      }
      if(mobileElement){
        mobileElement.style.background = 'white'; 
        mobileElement.style.color = '#1f1f1f'; 
      }
   
    }
  }
  
}


/*

    switch (true) {
      case overview.top >= 0 && overview.top <= window.innerHeight:
        WhoIsTop = 'overview'
        break;
      case flexx.top >= 0 && flexx.top <= window.innerHeight:
        WhoIsTop = 'flexx'
        break;
      case dpops.top+100 >= 0 && dpops.top <= window.innerHeight:
        WhoIsTop = 'dpops'
        break;
      case pubx.top >= 0 && pubx.top <= window.innerHeight:
        WhoIsTop = 'pubx'
        break;
      case ecox.top >= 0 && ecox.top <= window.innerHeight:
        WhoIsTop = 'ecox'
        break;
      case stake.top >= 0 && stake.top <= window.innerHeight:
        WhoIsTop = 'stake'
        break;
      case xpayment.top >= 0 && xpayment.top <= window.innerHeight:
        WhoIsTop = 'xpayment'
        break;
      case xswap.top >= 0 && xswap.top <= window.innerHeight:
        WhoIsTop = 'xswap'
        break;
      case wxcash.top >= 0 && wxcash.top <= window.innerHeight:
        WhoIsTop = 'wxcash'
        break;
      case xpy.top+450 >= 0 && xpy.top <= window.innerHeight:
        WhoIsTop = 'xpy'
        break;
      case sidechains.top+100 >= 0 && sidechains.top <= window.innerHeight:
        WhoIsTop = 'sidechains'
        break;
      case foundation.top+200 >= 0 && foundation.top <= window.innerHeight:
        WhoIsTop = 'foundation'
        break;
      case metrics.top+100 >= 0 && metrics.top <= window.innerHeight:
        WhoIsTop = 'metrics'
        break;
      case gofurther.top+100 >= 0 && gofurther.top <= window.innerHeight:
        WhoIsTop = 'gofurther'
        break;

      default:
        break;
    }
    return WhoIsTop;
  }




*/