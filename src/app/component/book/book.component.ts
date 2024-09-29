import { Component } from '@angular/core';
import { BookService } from '../../service/book/book.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) { }
  
  getBooks(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
