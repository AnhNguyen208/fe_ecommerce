import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../model/category';
import { CategoryService } from '../../../../service/category/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [AddCategoryComponent],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.scss'
})
export class ListCategoryComponent implements OnInit{
  categories: Category[] = [];
  selectedCategory: Category = new Category(0, "", "");

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.result;
    })
  }

  setCategory(category: Category): void {
    this.selectedCategory = category;
  }

  deleteCategory(id: number): void {
    this.categoryService.delete(id).subscribe((data) => {
      this.getCategories();
    })
  }

  reloadData(): void {
    this.getCategories();
  }
}
