export class Item {
    book_id: number;
    title: string;
    price: number;
    quantity: number;

    constructor(id: number, title: string, price: number, quantity: number) {
        this.book_id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
}