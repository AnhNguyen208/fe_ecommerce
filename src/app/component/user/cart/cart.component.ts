import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CartService } from '../../../service/cart/cart.service';
import { Item } from '../../../model/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  items: Item[] = []; 
  totalAmount: number = 0;
  totalItem: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.cartService.get().subscribe((data) => {
      this.items = data.result.books;
      this.updateCart();
    })
  }

  deleteItem(id: number) {
    this.cartService.delete(id).subscribe((data) => {
      this.getItems();
      this.updateCart();
    })
  }

  updateItem(id: number, quantity: number) {
    this.cartService.update(id, quantity).subscribe((data) => {
      console.log(data);
    })
  } 

  setQuantity(id: number, quantity: number) {
    const item = this.items.find((value) => value.book_id === id);
    if(item) {
      item.quantity = quantity;
    }

    this.updateCart();
  }

  ngOnChanges(change: SimpleChanges) {
    if(change['items']) {
      this.updateCart();
    }
  }

  updateCart() {
    this.totalAmount = 0;
    this.totalItem = this.items.length;
    this.items.forEach((item) => {
      this.totalAmount += item.price * item.quantity;
    })
  }
}
