import { Routes } from '@angular/router';
import { HomeComponent } from './component/user/home/home.component';
import { ListBookComponent } from './component/admin/book/list-book/list-book.component';
import { ListCategoryComponent } from './component/admin/category/list-category/list-category.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: ListBookComponent },
  { path: 'categories', component: ListCategoryComponent}
];


