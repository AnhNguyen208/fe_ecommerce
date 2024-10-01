import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Category } from '../../../../model/category';
import { CategoryService } from '../../../../service/category/category.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  form: FormGroup<any>;
  category: Category = new Category(0, "", "");

  @Input()
  reloadData!: () => void;

  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  submitCategory(): void {
    this.category.name = this.form.value.name;
    this.category.description = this.form.value.description;

    this.categoryService.add(this.category).subscribe(() => {
      this.reloadData();
    })
    
  }

}
