import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FaTenantConfigService } from './fa-tenant-config.service';
import { FaTenantInterceptor } from './fa-tenant.interceptor';
import { FaTenantService } from './fa-tenant.service';

@NgModule()
export class FaTenantModule {
  constructor(@Optional() @SkipSelf() parentModule?: FaTenantModule) {
    if (parentModule) {
      throw new Error(
        'FaTenantModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(config: FaTenantConfigService): ModuleWithProviders<FaTenantModule> {
    return {
      ngModule: FaTenantModule,
      providers: [
        FaTenantService,
        {
          provide: FaTenantConfigService,
          useValue: config
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: FaTenantInterceptor,
          multi: true
        }
      ]
    }
  }
}