import { Component, ElementRef, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  public screenWidth: number = screen.width
  options3: AnimationOptions = {
    path: '../assets/documents/charts.json',
  };
  
  options: AnimationOptions = {
    path: '../assets/documents/manphone_dark.json',
  };
   
  toggleBool:boolean = false;

  toggleContent(argument: ElementRef | HTMLElement ){

    let allPElems = undefined;

    for(let i = 1; i< 8; i++){
      allPElems = document.getElementById('content'+ i);
     
      if(argument !== allPElems){
        allPElems!.style.display = 'none';
        console.log('obj allpelems: ', allPElems)
      }

      if(argument === allPElems){
        argument.style.display = 'block'
      }
    }
/* Previous method required toggle button to be pressed twice to display content.

    this.toggleBool = !this.toggleBool;

    if (!this.toggleBool)
    {
      
      if (argument instanceof ElementRef ) {
        argument.nativeElement.style.display = 'block';
   
      }
      else {
        argument.style.display = 'block';
    
      }
    }

    if (this.toggleBool){
      if (argument instanceof ElementRef ) {
        argument.nativeElement.style.display = 'none';
  

      }
      else {
        argument.style.display = 'none';
       
      }
    }
*/
  }
  
  constructor() { }

  ngOnInit(): void {

  }

}
