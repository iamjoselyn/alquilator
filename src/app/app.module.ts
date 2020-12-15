import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductBookingComponent } from './pages/product-booking/product-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserAreaComponent } from './pages/user-area/user-area.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

import { AuthService } from './shared/services/auth.service';
import { UserRegistrationService } from './shared/services/user-registration.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductBookingComponent,
    UserRegistrationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserAreaComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    UserRegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }