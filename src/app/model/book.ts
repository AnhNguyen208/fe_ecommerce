export class Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  price: number;
  stock: string;
  description: string;
  imageUrl: string;
  category_id: number;

  constructor(id: number, title: string, author: string, publisher: string,
    year: number, price: number, stock: string,
    description: string, imageUrl: string, category_id: number) { 
    this.id = id;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.price = price;
    this.stock = stock;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category_id = category_id;
  }
}