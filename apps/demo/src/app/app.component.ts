import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'fairlie-agile-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isProduction: boolean = environment.production;
  siteTitle: string = `${environment.siteName} - ${this.isProduction ? 'Production' : 'Test'}`;
}
