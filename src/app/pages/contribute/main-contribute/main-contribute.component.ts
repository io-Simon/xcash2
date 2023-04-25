import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-contribute',
  templateUrl: './main-contribute.component.html',
  styleUrls: ['./main-contribute.component.scss']
})
export class MainContributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.bottomNav.nativeElement.style.opacity = 0
  }

  @HostListener('window:scroll', ['$event'])
  @ViewChild('bottomNav', {static: true}) bottomNav! : ElementRef;
  @ViewChild('ethos', {static: true}) ethos! : ElementRef;
  @ViewChild('repos', {static: true}) repos! : ElementRef;
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
    const ethos = this.ethos.nativeElement.getBoundingClientRect();
    const repos = this.repos.nativeElement.getBoundingClientRect();
    const gofurther = this.gofurther.nativeElement.getBoundingClientRect();

    let WhoIsTop = ''
    switch (true) {
      case ethos.top >= 0 && ethos.top <= window.innerHeight:
        WhoIsTop = 'ethos'
        break;
      case repos.top >= 0 && repos.top <= window.innerHeight:
        WhoIsTop = 'repos'
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
