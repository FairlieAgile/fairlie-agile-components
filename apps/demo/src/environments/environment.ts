import { environmentBase } from './environment.base';

export const environment = {
  ...environmentBase,
  production: false,
  environment: 'dev',
  tenants: [
    { tenantId: 'tenant1', friendlyName: 'tenant 1', clientId: '', urls: ['localhost', 'tenant1.localhost'] },
    { tenantId: 'tenant2', friendlyName: 'tenant 2', clientId: '', urls: ['tenant2.localhost'] },
  ]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
