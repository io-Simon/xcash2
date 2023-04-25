import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { landingRoutingModule } from './landing-routing.module';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { MetricsComponent } from './metrics/metrics.component';
import { MaterialModule } from '../shared/material/material.module';
import { BulletFeaturesComponent } from './bullet-features/bullet-features.component';
import { PpTxComponent } from './pp-tx/pp-tx.component';
import { DpopsComponent } from './dpops/dpops.component';
import { SidechainComponent } from './sidechain/sidechain.component';
import { PublicTX2Component } from './public-tx2/public-tx2.component';
import { EcoComponent } from './eco/eco.component';
import { PrivateStakeComponent } from './private-stake/private-stake.component';
import { XpaymentComponent } from './xpayment/xpayment.component';
import { XbankComponent } from './xbank/xbank.component';
import { WxcashComponent } from './wxcash/wxcash.component';
import { XPyComponent } from './x-py/x-py.component';
import { FoundationComponent } from './foundation/foundation.component';


@NgModule({
  declarations: [
    MainLandingComponent,
    LandingComponent,
    MetricsComponent,
    BulletFeaturesComponent,
    PpTxComponent,
    DpopsComponent,
    SidechainComponent,
    PublicTX2Component,
    EcoComponent,
    PrivateStakeComponent,
    XpaymentComponent,
    XbankComponent,
    WxcashComponent,
    XPyComponent,
    FoundationComponent
  ],
  imports: [
    CommonModule,
    landingRoutingModule,
    SharedModule,
    MaterialModule

  ],
  bootstrap: [MainLandingComponent],
  providers: [SharedModule]
})
export class LandingModule { }
