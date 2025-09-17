import { Component } from '@angular/core';
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  inStock?: boolean;
}
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  wishlistItems: WishlistItem[] = [
    {
      id: '1',
      name: 'Sample Product 1',
      price: 99,
      image: 'images/person.jpg',
      inStock: true,
    },
    {
      id: '2',
      name: 'Sample Product 2',
      price: 59,
      image: 'images/person.jpg',
      inStock: false,
    },
  ];

  removeItem(id: string) {
    this.wishlistItems = this.wishlistItems.filter((item) => item.id !== id);
  }

  addToCart(item: WishlistItem) {
    console.log(`Added ${item.name} to cart`);
    // هنا تضيف المنتج للسلة
  }
}
