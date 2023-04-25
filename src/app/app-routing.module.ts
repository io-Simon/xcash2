import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainLandingComponent } from './landingComponents/main-landing/main-landing.component';
import { MainContributeComponent } from './pages/contribute/main-contribute/main-contribute.component';
import { MainProjectComponent } from './pages/project/main-project/main-project.component';
import { MainWalletComponent } from './pages/wallet/main-wallet/main-wallet.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landingComponents/landing.module')
      .then(mod => mod.LandingModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project/project.module')
      .then(mod => mod.ProjectModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module')
      .then(mod => mod.WalletModule)
  },
  {
    path: 'contribute',
    loadChildren: () => import('./pages/contribute/contribute.module')
      .then(mod => mod.ContributeModule)
  },
 /* {
    path: 'mediakit',
    loadChildren: () => import('./pages/mediakit/mediakit.module')
      .then(mod => mod.MediakitModule)
  },*/
  { path: '',  pathMatch:'full', component: MainLandingComponent },
  { path: 'home',  pathMatch:'full', component: MainLandingComponent },
  { path: 'project', component: MainProjectComponent },
  //{ path: 'team', component: TeamComponent },
  // { path: 'getstarted', component: GetstartedComponent },
  { path: 'wallet', component: MainWalletComponent },
  // { path: 'ressources', component: RessourcesComponent },
  { path: 'contribute', component: MainContributeComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
