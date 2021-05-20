import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@fairlie-agile-components/ui/material';
import { DevBannerComponent } from './dev-banner.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [DevBannerComponent],
  exports: [DevBannerComponent],
})
export class UiDevBannerModule { }
