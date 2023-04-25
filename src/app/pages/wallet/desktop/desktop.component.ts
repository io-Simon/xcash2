import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  public screenWidth: number = screen.width
  divTab = '';
  divTab2 = 'Minted';
  boolForNgOnInit = false;

  divToggle2 (index:any){
    this.boolForNgOnInit = false
    const firstTabContainer = document.getElementById('firstTabContainer');
    const firstTab = document.getElementById('firstTab');
    //const buttonTab4 = document.getElementById('buttonTab4');

    if(!this.boolForNgOnInit){
      
      firstTabContainer!.style.background = '#1f1f1f';
      firstTab!.style.color = '#fa741c';
      //buttonTab4!.style.background = 'red';
    }
        
    if(index == this.divTab2) {
      this.divTab2 = '';
    }else{
      this.divTab2 = index;
    }
    }

  

  firstTabColors(){
    const firstTabContainer = document.getElementById('firstTabContainer');
    const firstTabA = document.getElementById('firstTabA');

    this.boolForNgOnInit = true;

    if(this.boolForNgOnInit && firstTabA && firstTabContainer){
      firstTabContainer!.style.background = '#fa741c';
      firstTabA!.style.color = 'white';
    }

  }

  constructor() { }

  ngOnInit(): void {
    this.firstTabColors();
  }

}
