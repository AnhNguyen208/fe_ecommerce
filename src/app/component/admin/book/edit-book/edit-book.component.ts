import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../../../model/book';
import { Category } from '../../../../model/category';
import { BookService } from '../../../../service/book/book.service';
import { CategoryService } from '../../../../service/category/category.service';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent{
  form: FormGroup<any>;
  categories: Category[] = [];
  @Input()
  book!: Book;
  @Input()
  reloadData!: () => void;

  constructor(private bookService: BookService, private categoryService: CategoryService, private fb: FormBuilder) {
    if(this.book) {
      this.form = this.fb.group({
        title: [this.book.title],
        author: [this.book.author],
        publisher: [this.book.publisher],
        year: [this.book.year],
        price: [this.book.price],
        stock: [this.book.stock],
        description: [this.book.description],
        imageUrl: [this.book.imageUrl],
        category_id: [this.book.category_id],
      });
    } else {
      this.form = this.fb.group({
        title: [''],
        author: [''],
        publisher: [''],
        year: [''],
        price: [''],
        stock: [''],
        description: [''],
        imageUrl: [''],
        category_id: [''],
      });
    }

    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['book']) {
      this.form = this.fb.group({
        title: [this.book.title],
        author: [this.book.author],
        publisher: [this.book.publisher],
        year: [this.book.year],
        price: [this.book.price],
        stock: [this.book.stock],
        description: [this.book.description],
        imageUrl: [this.book.imageUrl],
        category_id: [this.book.category_id],
      });
    }
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

    this.bookService.edit(this.book.id, this.book).subscribe(() => {
      this.reloadData();
    })
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.result;
    })
  }
}
