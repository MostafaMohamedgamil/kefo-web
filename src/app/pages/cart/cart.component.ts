import { Component } from '@angular/core';
interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image?: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Product One',
      size: 'M',
      price: 50,
      quantity: 1,
      image: 'images/person.jpg',
    },
    {
      id: 2,
      name: 'Product Two',
      size: 'L',
      price: 70,
      quantity: 2,
      image: 'images/person.jpg',
    },
  ];

  get subtotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  get shipping(): number {
    return this.subtotal > 100 ? 0 : 15;
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }

  updateQuantity(item: CartItem, quantity: number) {
    if (quantity < 1) {
      this.removeItem(item.id);
      return;
    }
    item.quantity = quantity;
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }
}
