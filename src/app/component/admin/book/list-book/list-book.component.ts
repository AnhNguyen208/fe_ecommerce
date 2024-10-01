import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../service/book/book.service';
import { Book } from '../../../../model/book';
import { DetailBookComponent } from '../detail-book/detail-book.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-list-book',
  standalone: true,
  imports: [DetailBookComponent, AddBookComponent, EditBookComponent],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.scss'
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book = new Book(0, "", "", "", 0, 0, 0, "", "", 0, "");
  constructor(private bookService: BookService) {}
  
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getAll().subscribe((data) => {
      this.books = data.result;
    })
  }

  setBook(book: Book): void {
    this.selectedBook = book;
  }

  deleteBook(id: number): void {
    this.bookService.delete(id).subscribe((data) => {
      this.getBooks();
    })
  }

  reloadData(): void {
    this.getBooks();
  }

}
