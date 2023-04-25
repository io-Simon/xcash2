import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourcesComponent } from './ressources.component';
import { RessourcesRoutingModule } from './ressources-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RessourcesRoutingModule,
    SharedModule
  ],
  exports: [
    RessourcesComponent
  ],
  declarations: [
    RessourcesComponent
  ],
  providers: [ SharedModule
  ],
})
export class RessourcesModule { }
