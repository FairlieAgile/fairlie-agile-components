import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatIncrementorComponent } from './mat-incrementor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    MatIncrementorComponent
  ],
  exports: [
    MatIncrementorComponent
  ]
})
export class UiMatIncrementorModule { }
