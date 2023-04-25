import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule
  ],
  exports: [
    TeamComponent
  ],
  declarations: [
    TeamComponent
  ],
  providers: [
    SharedModule
  ],
})
export class TeamModule { }
