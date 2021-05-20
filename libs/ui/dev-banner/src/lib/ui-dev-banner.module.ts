import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DevBannerComponent } from './dev-banner.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  declarations: [DevBannerComponent],
  exports: [DevBannerComponent],
})
export class UiDevBannerModule { }
