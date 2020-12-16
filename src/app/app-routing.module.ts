import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductBookingComponent } from './pages/product-booking/product-booking.component';
import { UserAreaComponent } from './pages/user-area/user-area.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  {path: "booking", component: ProductBookingComponent},
  {path: "registration", component: UserRegistrationComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: UserLoginComponent},
  // Category route 
  // {path: "category/:id", component: CategoryComponent},
  {path: "category/:name", component: CategoryComponent},
  { path: "user-area", component: UserAreaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
