import { Routes } from '@angular/router';
import { BookComponent } from './component/book/list/book.component';

export const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: "books", component: BookComponent}
];
