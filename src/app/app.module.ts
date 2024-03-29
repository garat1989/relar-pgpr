import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AdminModule } from './pages/admin/admin.module';
import { MaterialModule } from './modules/material.module';

/* FIREBASE */
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule, AuthProvider } from 'ngx-auth-firebaseui';

/* PAYPAL*/
import { NgxPayPalModule } from 'ngx-paypal';

/* I18N */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function createTranslateLoader(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

/* LOCALES */
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
registerLocaleData(localeEs, '_es');
registerLocaleData(localePt, '_pt');
registerLocaleData(localeEn, '_en');

/* PAGES */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ProgramaComponent } from './pages/programa/programa.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PosterhallComponent } from './pages/posterhall/posterhall.component';
import { PosterComponent } from './pages/poster/poster.component';
import { AperturaComponent } from './pages/apertura/apertura.component';
import { ClausuraComponent } from './pages/clausura/clausura.component';
//import { PostularTrabajo2Component } from './pages/postular-trabajo2/postular-trabajo2.component';
/* PAGO */
import { RegistrarseComponent } from './pages/pago/pago-1/registrarse.component';
import { PagoComponent } from './pages/pago/pago-2/pago.component';
import { PostularTrabajoComponent } from './pages/pago/pago-3/postular-trabajo.component';
import { Pago2Component } from './pages/pago/pago-4/pago2.component';
import { Pago3Component } from './pages/pago/pago-5/pago3.component';

/* COMPONENTS */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaypalComponent } from './components/paypal/paypal.component';
/* FORMS */
import { PostularFormComponent } from './components/forms/postular-trabajo/postular-form.component';
import { CargarPdfComponent } from './components/forms/cargar-pdf/cargar-pdf.component';
/* DIALOGS */
import { DeleteConfirmationComponent } from './components/dialogs/delete-confirmation.component';
import { PopUpComponent } from './components/dialogs/pop-up-home.component';
/* HOME COMPONENTS */
import { LogosComponent } from './components/home/logos/logos.component';
import { ComiteComponent } from './components/home/comite/comite.component';
import { AcercaComponent } from './components/home/acerca/acerca.component';
import { PosterHomeComponent } from './components/home/poster/poster.component';
import { MesasComponent } from './components/home/mesas/mesas.component';
import { InscripcionesComponent } from './components/home/inscripciones/inscripciones.component';
import { FechasImportantesComponent } from './components/home/fechas-importantes/fechas-importantes.component';
import { NoticiasHomeComponent } from './components/home/noticias/noticias.component';
import { IntroduccionComponent } from './components/home/introduccion/introduccion.component';

/* PIPES */
import { ImgPipe } from './pipes/img.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { OrderTranslatePipe } from './pipes/order-countries.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { VideosComponent } from './pages/videos/videos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    RegistrarseComponent,
    PagoComponent,
    Pago2Component,
    Pago3Component,
    PaypalComponent,
    PostularTrabajoComponent,
    //PostularTrabajo2Component,
    LoginComponent,
    UserComponent,
    EditarComponent,
    PosterhallComponent,
    PosterComponent,
    //
    ImgPipe,
    UsernamePipe,
    OrderTranslatePipe,
    SafePipe,
    //
    ProgramaComponent,
    FaqComponent,
    NoticiasComponent,
    LogosComponent,
    ComiteComponent,
    AcercaComponent,
    PosterHomeComponent,
    MesasComponent,
    InscripcionesComponent,
    FechasImportantesComponent,
    NoticiasHomeComponent,
    IntroduccionComponent,
    PostularFormComponent,
    DeleteConfirmationComponent,
    PopUpComponent,
    CargarPdfComponent,
    AperturaComponent,
    ClausuraComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //
    AdminModule,
    MaterialModule,
    //
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    NgxPayPalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    NgxAuthFirebaseUIModule.forRoot(
    {
      apiKey: 'AIzaSyBJ0Hp1BfWmmSSzHfZaceHB7yLbrDuEFp8',
      authDomain: 'relar-pgpr.firebaseapp.com',
      projectId: 'relar-pgpr',
      storageBucket: 'relar-pgpr.appspot.com',
      messagingSenderId: '121333279414',
      appId: '1:121333279414:web:4ba9ba120dbb10f9e2d417',
      measurementId: 'G-WQXZ96DHH3'
    },
    () => 'RELAR-PGPR',
    {
      enableFirestoreSync: true, // enable/disable auto-sync users with firestore
      toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
      passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
      passwordMinLength: 8, // Password length min/max in forms independently of each component min/max.
      // Same as password but for the name
      nameMaxLength: 50,
      nameMinLength: 2,
      // If set, sign-in/up form is not available until email has been verified.
      // Plus protected routes are still protected even though user is connected.
      guardProtectedRoutesUntilEmailIsVerified: false,
      enableEmailVerification: false, // default: true
      useRawUserCredential: false, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
    }
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
