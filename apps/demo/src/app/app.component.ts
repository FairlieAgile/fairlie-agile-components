import { Component, OnInit } from '@angular/core';
import { FaTenantService } from '@fairlieagile/tenant';
import { environment } from './../environments/environment';

@Component({
  selector: 'fairlie-agile-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isProduction: boolean = environment.production;
  siteTitle = `${environment.siteName} - ${environment.environment}`;

  constructor(
    private faTenantService: FaTenantService
  ) { }

  ngOnInit(): void {
    const tenant = this.faTenantService.getTenant();
    if (tenant) {
      this.siteTitle += ` - ${tenant.friendlyName}`
    }
  }
}
