import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-background',
  templateUrl: './project-background.component.html',
  styleUrls: ['./project-background.component.scss']
})
export class ProjectBackgroundComponent implements OnInit {
  public screenWidth: number = screen.width
  constructor() { }

  ngOnInit(): void {
  }

}
