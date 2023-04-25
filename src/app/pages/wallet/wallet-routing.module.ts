import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet.component';
import { MainWalletComponent } from './main-wallet/main-wallet.component';

const routes: Routes = [
  { path: '', component: MainWalletComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
