import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin2.component.scss']
})
export class CoinComponent implements OnInit {
  public screenWidth: number = screen.width
  divTab = '';
  divTab2 = 'Minted';

  divToggle2 (index:any){
    this.boolForNgOnInit = false
    const firstTabContainer = document.getElementById('firstTabContainer');
    const firstTab = document.getElementById('firstTab');

    if(!this.boolForNgOnInit && firstTabContainer && firstTab){
      firstTabContainer!.style.background = '#1f1f1f';
      firstTab!.style.color = '#fa741c';
    }
    

    
    if(index == this.divTab2) {
      this.divTab2 = '';
    }else{
      this.divTab2 = index;
    }
  }

  boolForNgOnInit = false

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
