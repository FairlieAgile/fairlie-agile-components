import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiMatIncrementorModule } from "fairlieagile/mat-incrementor";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiMatIncrementorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
