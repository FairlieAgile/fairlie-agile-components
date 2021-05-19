import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevContainerComponent } from './dev-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DevContainerComponent
  ],
  exports: [
    DevContainerComponent
  ],
})
export class UiDevContainerModule {}
