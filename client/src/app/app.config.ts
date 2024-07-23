import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
export const appConfig: ApplicationConfig = {
  
  providers: [AuthGuard,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}, provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
};
