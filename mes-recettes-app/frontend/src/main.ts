import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAuth0 } from '@auth0/auth0-angular';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ Active les formulaires réactifs
    importProvidersFrom(ReactiveFormsModule),

    // ✅ Auth0 doit rester dans la config
    provideAuth0({
      domain: 'dev-4el5cyfmrubreq43.us.auth0.com',
      clientId: 'Ed2bh0jUE3b8RdAfInxLhKWz3xX3lAOU',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://mes-recettes-api'
      },
      httpInterceptor: {
        allowedList: [
          { uri: '/api/*', tokenOptions: {} }
        ]
      }
    })
  ]
});
