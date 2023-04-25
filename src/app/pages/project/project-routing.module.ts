import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainProjectComponent } from './main-project/main-project.component';

const routes: Routes = [
  { path: '', component: MainProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
