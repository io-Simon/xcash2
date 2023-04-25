import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetstartedComponent } from './getstarted.component';
import { GetstartedRoutingModule } from './getstarted-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GetstartedRoutingModule,
    SharedModule

  ],
  exports: [
    GetstartedComponent
  ],
  declarations: [
    GetstartedComponent
  ],
  providers: [ SharedModule
  ],
})
export class GetstartedModule { }
