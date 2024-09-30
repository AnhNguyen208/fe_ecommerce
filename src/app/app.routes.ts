import { Routes } from '@angular/router';
import { BookComponent } from './component/admin/book/list/book.component';
import { HomeComponent } from './component/user/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: "books", component: BookComponent }
];
