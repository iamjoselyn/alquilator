import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { EachProductComponent } from './pages/each-product/each-product.component';
import { GeneralComponent } from './pages/general/general.component';
import { HomeComponent } from './pages/home/home.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { ProductBookingComponent } from './pages/product-booking/product-booking.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserAreaComponent } from './pages/user-area/user-area.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  {path: "booking", component: ProductBookingComponent},
  {path: "registration", component: UserRegistrationComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: UserLoginComponent},
  {path: "category/:name", component: CategoryComponent},
  { path: "user-area", component: UserAreaComponent},
  {path: "profile", component: ProfileComponent},
  {path: "general", component: GeneralComponent},
  {path: "upload", component: NewProductComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "each-product/:id", component: EachProductComponent},
 
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
