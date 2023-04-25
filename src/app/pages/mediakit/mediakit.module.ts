import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediakitComponent } from './mediakit.component';
import { MediakitRoutingModule } from './mediakit-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MediakitComponent
  ],
  imports: [
    CommonModule,
    MediakitRoutingModule,
    SharedModule
  ],
  exports: [
    MediakitComponent
  ],
  providers: [
    SharedModule
  ]
})
export class MediakitModule { }
