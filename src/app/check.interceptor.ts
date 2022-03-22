import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CheckInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Do use ful operation before sending the request
    if(request.url){
      console.log(request.url,request.method,request)
    }
    request=request.clone({
      setHeaders:{
        'Int':"from Interceptor"
      },
      setParams:{
        aabb:"aabbcc"
      }
    })
    return next.handle(request);
  }
}
