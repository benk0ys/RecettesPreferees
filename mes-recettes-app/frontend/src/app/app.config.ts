import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { authHttpInterceptorFn } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'dev-4el5cyfmrubreq43.us.auth0.com',
        clientId: 'Ed2bh0jUE3b8RdAfInxLhKWz3xX3lAOU',
        authorizationParams: {
          redirect_uri: window.location.origin,
          audience: 'https://mes-recettes-api'
        },
        httpInterceptor: {
          allowedList: [
            { uri: '/api/recipes', httpMethod: 'POST' },
            { uri: '/api/recipes', httpMethod: 'GET' }
          ]
        }
      })
    )
  ],
};