import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@fairlie-agile-components/ui/material';
import { UiDevBannerModule } from '@fairlieagile/dev-banner';
import { FaLayoutModule } from '@fairlieagile/layout';
import { UiMatIncrementorModule } from '@fairlieagile/mat-incrementor';
import { FaTenantModule } from '@fairlieagile/tenant';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FaTenantModule.forRoot({ tenants: environment.tenants }),
    UiMatIncrementorModule,
    UiDevBannerModule,
    MaterialModule,
    FaLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
