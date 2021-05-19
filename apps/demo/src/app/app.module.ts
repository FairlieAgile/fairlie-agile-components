import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "@fairlie-agile-components/ui/material";
import { UiDevContainerModule } from 'fairlieagile/dev-container';
import { UiMatIncrementorModule } from "fairlieagile/mat-incrementor";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiMatIncrementorModule,
    UiDevContainerModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
