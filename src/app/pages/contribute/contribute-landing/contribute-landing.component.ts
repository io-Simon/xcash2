import { Component, HostListener, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-contribute-landing',
  templateUrl: './contribute-landing.component.html',
  styleUrls: ['./contribute-landing.component.scss']
})
export class ContributeLandingComponent implements OnInit {
  optionsLeft: AnimationOptions = {
    path: '../assets/documents/Lottie_xcash_dev_dark_nogrid_cropped.json',
  };

  optionsRight: AnimationOptions = {
    path: '../assets/documents/devBlue.json',
  };

  public screenWidth: number = screen.width
  
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.shouldLoaderMethod(false)
  }

}
