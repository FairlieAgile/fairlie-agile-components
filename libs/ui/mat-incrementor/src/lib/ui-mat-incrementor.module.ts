import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIncrementorComponent } from './mat-incrementor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MatIncrementorComponent
  ],
  exports: [
    MatIncrementorComponent
  ]
})
export class UiMatIncrementorModule { }
