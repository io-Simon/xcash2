import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainWalletComponent } from './main-wallet/main-wallet.component';
import { WalletLandingComponent } from './wallet-landing/wallet-landing.component';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { PaperComponent } from './paper/paper.component';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    WalletComponent
  ],
  declarations: [
    WalletComponent,
    MainWalletComponent,
    WalletLandingComponent,
    DesktopComponent,
    MobileComponent,
    PaperComponent
  ],
  providers: [ SharedModule
  ],
  bootstrap: [MainWalletComponent]
})
export class WalletModule { }
