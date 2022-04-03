import { LOCALE_ID, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { setInjector } from './shared/injector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './providers/user.service';
import { CustomTranslationModule } from './shared/custom-translation/custom-translation-module';
import { FooterComponent } from './structure/footer/footer.component';
import { HeaderComponent } from './structure/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleAuthService } from './providers/google-auth.service';
import { GoogleAuthComponent } from './pages/google-auth/google-auth.component';
import { Interceptor } from './shared/interceptor';
import { PlanService } from './providers/plan.service';
import { StripeService } from './providers/stripe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GoogleAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomTranslationModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    PlanService,
    StripeService,
    GoogleAuthService,
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR' // 'de-DE' for Germany, 'fr-FR' for France ...
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setInjector(injector);
  }
}

