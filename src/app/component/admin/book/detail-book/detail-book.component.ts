import { Component, Input } from '@angular/core';
import { Book } from '../../../../model/book';

@Component({
  selector: 'app-detail-book',
  standalone: true,
  imports: [],
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.scss'
})
export class DetailBookComponent {
  @Input()
  book!: Book;
}
