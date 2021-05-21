import { HttpHeaders } from "@angular/common/http";
import { Injectable, Optional } from '@angular/core';
import { FaTenantConfigService } from './fa-tenant-config.service';
import { FaTenant } from './fa-tenant.model';

@Injectable({
  providedIn: 'root'
})
export class FaTenantService {
  private tenants: FaTenant[] = [];
  private currentTenant: FaTenant | undefined;

  constructor(@Optional() config?: FaTenantConfigService) {
    if (config)
      this.tenants = config.tenants;
    this.setCurrentTenant(location.hostname);
  }

  getTenant(): FaTenant | undefined {
    return this.currentTenant;
  }

  setCurrentTenant(hostUrl: string) {
    const _host = hostUrl.toLowerCase();
    this.currentTenant = this.tenants.find(tenant => {
      return tenant.urls.find(url => _host.startsWith(url.toLowerCase()));
    })
    if (!this.currentTenant && this.tenants.length > 0)
      this.currentTenant = this.tenants[0]
  }

  addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
    const tenant = this.getTenant();
    if (tenant) {
      return headers.append("X-Tenant-ID", tenant.tenantId);
    }
    return headers;
  }
}
