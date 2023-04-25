import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainProjectComponent } from './main-project/main-project.component';
import { ProjectLandingComponent } from './project-landing/project-landing.component';
import { ProjectBackgroundComponent } from './project-background/project-background.component';
import { GovernanceComponent } from './governance/governance.component';
import { TechComponent } from './tech/tech.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { CoinComponent } from './coin/coin.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
  ],
  exports: [
    ProjectComponent
  ],
  declarations: [
    ProjectComponent,
    MainProjectComponent,
    ProjectLandingComponent,
    ProjectBackgroundComponent,
    GovernanceComponent,
    TechComponent,
    RoadmapComponent,
    CoinComponent
  ],
  providers: [ SharedModule
  ],
  bootstrap: [ MainProjectComponent]
})
export class ProjectModule { }
