import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './pages/general/general.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewProductComponent } from './pages/new-product/new-product.component';

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
    GeneralComponent,
    ProfileComponent,
    NewProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
