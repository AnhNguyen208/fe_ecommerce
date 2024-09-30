import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../service/book/book.service';
import { Book } from '../../../model/book';
import { Category } from '../../../model/category';
import { CategoryService } from '../../../service/category/category.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  categories: Category[] = [];

  constructor(private bookService: BookService, private categoryService: CategoryService) { }
  
  ngOnInit(): void {
    this.getBooks();
  }
  
  getBooks(): void {
    this.bookService.getAll().subscribe((data) => {
      this.books = data.result;
    });
  }
}
