import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@fairlie-agile-components/ui/material';
import { UiDevBannerModule } from '@fairlieagile/dev-banner';
import { UiMatIncrementorModule } from '@fairlieagile/mat-incrementor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiMatIncrementorModule,
    UiDevBannerModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
