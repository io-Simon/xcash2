import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContributeComponent } from './main-contribute/main-contribute.component';

const routes: Routes = [
  { path: '', component: MainContributeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContributeRoutingModule { }
