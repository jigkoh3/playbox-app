import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, finalize, tap } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpReq = req;
    // Set token to header
    const token = localStorage.getItem('access_token');
    if (token != null) {
      httpReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }


    return next.handle(httpReq).pipe(
      finalize(() => {
        
      })
    );
  }
}
