import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContributeRoutingModule } from './contribute-routing.module';
import { MainContributeComponent } from './main-contribute/main-contribute.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ContributeLandingComponent } from './contribute-landing/contribute-landing.component';
import { BuildersComponent } from './builders/builders.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ReposComponent } from './repos/repos.component';
import { FurtherComponent } from './further/further.component';
import { EthosComponent } from './ethos/ethos.component';


@NgModule({
  imports: [
    CommonModule,
    ContributeRoutingModule,
    SharedModule,
    MaterialModule

  ],
  exports: [
    //ContributeComponent
  ],
  declarations: [
    MainContributeComponent,
    ContributeLandingComponent,
    BuildersComponent,
    VacanciesComponent,
    ReposComponent,
    FurtherComponent,
    EthosComponent
  ],
  providers: [ SharedModule
  ],
  bootstrap: [MainContributeComponent]
})
export class ContributeModule { }
