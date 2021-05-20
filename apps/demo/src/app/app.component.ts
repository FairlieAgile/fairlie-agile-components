import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'fairlie-agile-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isProduction: boolean = environment.production;
  siteTitle = `${environment.siteName} - ${environment.environment}`;
}
