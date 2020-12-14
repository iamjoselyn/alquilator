import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductBookingComponent } from './pages/product-booking/product-booking.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  {path: "booking", component: ProductBookingComponent},
  {path: "registro", component: UserRegistrationComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: UserLoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
