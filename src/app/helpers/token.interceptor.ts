import { AuthenticationService } from './../services/authentication.service';
import {
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
    HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public authenticationService: AuthenticationService, private tokenExtractor: HttpXsrfTokenExtractor) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Authorization: `Bearer ${this.authenticationService.getToken()}`
        let headers = request.headers;
        headers = headers.append('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('Access-Control-Allow-Headers', 'Content-Type,  x-csrf-token');
        headers = headers.append('Access-Control-Allow-Credentials', 'true');
        // console.log(headers);
        let cookieheaderName = 'x-csrf-token';
        let csrfToken = this.tokenExtractor.getToken();
        console.log(csrfToken);
        if (csrfToken == null || csrfToken == 'undefined') {
            headers = headers.append(cookieheaderName, 'undefined')
        } else {
            headers = headers.append(cookieheaderName, csrfToken);
        }
        if (this.authenticationService.isLoggedIn()) {
            headers = headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken);
        }
        request = request.clone({ headers: headers });
        return next.handle(request);
    }
}