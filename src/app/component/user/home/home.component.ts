import { Component } from '@angular/core';
import { Book } from '../../../model/book';
import { Category } from '../../../model/category';
import { BookService } from '../../../service/book/book.service';
import { CategoryService } from '../../../service/category/category.service';
import { DetailBookComponent } from '../../admin/book/detail-book/detail-book.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DetailBookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  books: Book[] = [];
  categories: Category[] = [];
  selectedCategory: number = -1;
  selectedBook: Book = new Book(0, "", "", "", 0, 0, 0, "", "", 0, "");

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getBooks();
  }

  getCategories(): void {
    this, this.categoryService.getAll().subscribe((data) => {
      this.categories = data.result;
    })
  }

  getBooks(): void {
    this.bookService.getAll().subscribe((data) => {
      this.books = data.result;
    });
  }

  setCategory(categoryId: number): void {
    this.selectedCategory = categoryId;
    if (this.selectedCategory === -1) {
      this.getBooks();
    } else {
      this.bookService.getByCategoryId(this.selectedCategory).subscribe((data) => {
        this.books = data.result;
      })
    }
  }

  setBook(book: Book): void {
    this.selectedBook = book;
  }
}
