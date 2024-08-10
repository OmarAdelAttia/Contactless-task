import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { _formReducer } from './shared/store/form.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(
      {
        eventCoalescing: true
      }
    ),
    provideRouter(routes),
    provideClientHydration(),
    provideEffects(),
    provideStore(
      {
        formState: _formReducer
      }
    ),
    provideStoreDevtools(
      {
        maxAge: 6
      }
    )
  ]
};
