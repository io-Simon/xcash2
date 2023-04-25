import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MetricsComponent } from './metrics/metrics.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'metrics', component: MetricsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class landingRoutingModule { }
