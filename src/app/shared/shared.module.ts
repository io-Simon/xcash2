import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web/build/player/lottie_svg';
import { FlexLayoutModule } from '@angular/flex-layout';
import { httpdataservice } from '../services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { GoFurtherComponent } from './go-further/go-further.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    NavbarComponent,
    GoFurtherComponent
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    LottieModule,
    FlexLayoutModule,
    LottieModule.forRoot({ player: playerFactory }),
    HttpClientModule,
    MaterialModule,
  ],
  exports: [ClipboardModule, LottieModule, FlexLayoutModule, MaterialModule, NavbarComponent, GoFurtherComponent],
  providers: [httpdataservice]
})
export class SharedModule { }
