import { Component, Input, SimpleChanges } from '@angular/core';
import { Category } from '../../../../model/category';
import { CategoryService } from '../../../../service/category/category.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss'
})
export class EditCategoryComponent {
  form: FormGroup<any>;
  @Input()
  category!: Category;
  @Input()
  reloadData!: () => void;

  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
    if (this.category) {
      this.form = this.fb.group({
        name: [this.category.name],
        description: [this.category.description],
      });
    } else {
      this.form = this.fb.group({
        name: [''],
        description: [''],
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) {
      this.form = this.fb.group({
        name: [this.category.name],
        description: [this.category.description],
      });
    }
  }

  submitBook(): void {
    this.category.name = this.form.value.name;
    this.category.description = this.form.value.description;

    this.categoryService.edit(this.category.id, this.category).subscribe(() => {
      this.reloadData();
    })
  }
}
