# fa-tenant

This library was generated with [Nx](https://nx.dev).

## Example scenario

You have several instances of essentially the same site. Most sites can be run on the same server instance but you may be required to separate another site onto its own server.

What you require is a multi-tenant/multi-site solution that can be controlled by the sites environment files.

This can be used in conjunction with the theme-picker to skin the sites differently.

## Setup
Install
> npm i @fairlieagile/tenant --save


For development add the hosts that are allowed for your site in package.json

    "start": "ng serve --port 4300 --allowed-hosts 'tenant1.localhost,tenant2.localhost'",


### Setup environment files

/src/environments/environment.ts
```typescript
    export const environment = {
      ...
      tenants: [
        { tenantId: 'tenant1', friendlyName: 'tenant 1', clientId: '', urls: ['localhost', 'tenant1.localhost'] },
        { tenantId: 'tenant2', friendlyName: 'tenant 2', clientId: '', urls: ['tenant2.localhost'] }
      ]
    }
```

### Change hostfile for development testing (Windows)

    127.0.0.1	tenant1.localhost
    127.0.0.1	tenant2.localhost
    127.0.0.1	tenant3.localhost

### Usage
Import into your app module:

```typescript
    import { FaTenantModule } from '@fairlieagile/tenant';
    import { environment } from '../environments/environment';

    @NgModule({
      imports: [
        ...
        FaTenantModule.forRoot({ tenants: environment.tenants })
      ],
      providers: [],
      bootstrap: [AppComponent],
    })
    export class AppModule { }
```

### Use in component

```typescript
import { Component, OnInit } from '@angular/core';
import { FaTenantService } from '@fairlieagile/tenant';
import { environment } from './../environments/environment';

@Component({
  selector: '...',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  siteTitle: string = '';

  constructor(
    private faTenantService: FaTenantService
  ) { }

  ngOnInit(): void {
    const tenant = this.faTenantService.getTenant();
    if (tenant) {
      this.siteTitle = tenant.friendlyName
    }
  }
}
```

### API calls
The module includes an interceptor that will ensure http request headers are appended with X-Tenant-ID and the tenantId from the environment file. (e.g X-Tenant-ID: tenant1)

## Setup 2nd site (optional)
If a separate site is required for another tenant you will need to add another environment file for each of the sites you will be deploying to (e.g. environment.tenant3.ts, environment.tenant3.stage.ts & environment.tenant3.prod.ts)

Other than the configuration setup changes below, no changes should be required in your main code base.

> angular.json  

Also add build configs for stage and prod 

```typescript
"projects": {
  "--APP-NAME--": {
    "architect": {
      "build": {
        "options": {
          "configurations": {
            ...
            "tenant3": {    // add this block
              "fileReplacements": [
                {
                  "replace": "apps/demo/src/environments/environment.ts",
                  "with": "apps/demo/src/environments/environment.stage.ts"
                }
              ],
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            },
          }
        } 
      }, 
      "serve": {
        "builder": "@angular-devkit/build-angular:dev-server",
        "configurations": {
          ...
          "tenant3": { // add this block
            "browserTarget": "demo:build:tenant3"
          },
        },
      }
```

> package.json
```
    "start:tenant3": "ng serve --port 4310 --configuration tenant3 --allowed-hosts 'tenant3.localhost'",
```

>/src/environments/environment.tenant3.ts

Create a new environment file (also create for .stage & .prod)
```typescript
    export const environment = {
      ...
      tenants: [
        { tenantId: 'tenant3', friendlyName: 'tenant 3', urls: ['tenant3.localhost'] }
      ]
    }
```

You can now run the site for the new tenant
> npm run start:tenant3

<!-- ### Deployment (Azure) -->

## Thanks to
https://itnext.io/building-a-skinnable-multi-tenant-angular-application-7bc6f558fc0c

