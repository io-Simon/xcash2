import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'XCASH';
  navBool = false;
  
  constructor(private service: CommonService){}

  ngOnInit(): void {
    this.service.navBoolObservable$.subscribe((res:any)=> this.navBool = res)
    /*
    setTimeout(() => {
      this.loader = false
      }, 1200);
     */
  }
 
  //shouldLoader = true;

  //loader = true;

}
