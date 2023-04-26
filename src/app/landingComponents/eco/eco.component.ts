import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.scss']
})
export class EcoComponent implements OnInit {

  options: AnimationOptions = {
    path: '../assets/documents/team_gears.json',
  };
  public screenWidth: number = screen.width

  constructor() { }

  ngOnInit(): void {
  }

}
