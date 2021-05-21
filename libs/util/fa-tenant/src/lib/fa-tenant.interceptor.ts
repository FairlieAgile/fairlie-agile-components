import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaTenantService } from './fa-tenant.service';

@Injectable()
export class FaTenantInterceptor implements HttpInterceptor {
  constructor(private tenantService: FaTenantService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = this.tenantService.addTenantToHeaders(request.headers);

    request = request.clone({
      headers: headers
    });

    return next.handle(request);
  }
}