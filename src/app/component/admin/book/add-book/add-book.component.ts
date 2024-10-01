import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../../../service/book/book.service';
import { Category } from '../../../../model/category';
import { CategoryService } from '../../../../service/category/category.service';
import { Book } from '../../../../model/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  form: FormGroup<any>;
  book: Book = new Book(0, "", "", "", 0, 0, 0, "", "", 0, "");
  categories: Category[] = [];
  
  @Input()
  reloadData!: () => void;

  
  constructor(private bookService: BookService, private categoryService: CategoryService, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [''],
      author: [''],
      publisher: [''],
      year: [2024],
      price: [0],
      stock: [0],
      description: [''],
      imageUrl: [''],
      category_id: [0],
    });

    this.getCategories();
  }

  submitBook(): void {
    this.book.title = this.form.value.title;
    this.book.author = this.form.value.author;
    this.book.publisher = this.form.value.publisher;
    this.book.year = this.form.value.year;
    this.book.price = this.form.value.price;
    this.book.stock = this.form.value.stock;
    this.book.description = this.form.value.description;
    this.book.imageUrl = this.form.value.imageUrl;
    this.book.category_id = this.form.value.category_id;

    this.bookService.add(this.book).subscribe(() => {
      this.reloadData();
    })
    
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.result;
    })
  }
}
