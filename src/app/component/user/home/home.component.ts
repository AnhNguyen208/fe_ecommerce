import { Component } from '@angular/core';
import { Book } from '../../../model/book';
import { Category } from '../../../model/category';
import { BookService } from '../../../service/book/book.service';
import { CategoryService } from '../../../service/category/category.service';
import { DetailBookComponent } from '../../admin/book/detail-book/detail-book.component';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../service/cart/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DetailBookComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  books: Book[] = [];
  categories: Category[] = [];
  selectedCategory: number = -1;
  selectedBook: Book = new Book(0, "", "", "", 0, 0, 0, "", "", 0, "");
  keyword: string = "";

  constructor(private bookService: BookService, private categoryService: CategoryService, private cartService: CartService) { }

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

  search(): void {
    if(this.keyword !== "") {
      this.bookService.search(this.keyword).subscribe((data) => {
        this.books = data.result;
      });
    }
  }

  addToCart(id: number) {
    this.cartService.add(id).subscribe((data) => {
      console.log(data);
      alert("Thêm vào giỏ hàng thành công!!!")
    })
  }

}
