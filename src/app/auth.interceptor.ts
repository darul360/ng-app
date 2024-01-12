import { HttpInterceptorFn, HttpResponseBase } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { CoreService } from './shared/services/core.service.spec';
import { inject } from '@angular/core';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token') || '';
  const reqClone = req.clone({ setHeaders: { authorization: token } })
  var coreSerices = inject(CoreService);
  return next(reqClone).pipe(
    tap((ev) => {
      if (ev instanceof HttpResponseBase) {        
        setTimeout(() => coreSerices.isLoading.set(false), 6000)

        coreSerices.isLoading.set(false);

      } else {
        setTimeout(() => coreSerices.isLoading.set(false), 6000)
        coreSerices.isLoading.set(true);
      }
    }),
    catchError((err: any) => {
      return throwError(() => err)
    })
  );
};