import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builders',
  templateUrl: './builders.component.html',
  styleUrls: ['./builders.component.scss']
})
export class BuildersComponent implements OnInit {

  divTab = '';
  divToggle(index:any){
    if(index == this.divTab) {
      this.divTab = '';
    }else{
      this.divTab =index;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
