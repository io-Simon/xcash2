import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,

  ],
  exports: [    
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,

   ]
})
export class MaterialModule { }
