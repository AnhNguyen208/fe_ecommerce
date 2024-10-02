import { Routes } from '@angular/router';
import { HomeComponent } from './component/user/home/home.component';
import { ListBookComponent } from './component/admin/book/list-book/list-book.component';
import { ListCategoryComponent } from './component/admin/category/list-category/list-category.component';
import { LoginComponent } from './component/auth/login/login.component';
import { CartComponent } from './component/user/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: ListBookComponent },
  { path: 'categories', component: ListCategoryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent}
];


