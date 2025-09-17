import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  hovered: any = null;

  products = [
    {
      title: 'Product 1',
      price: 100,
      image: 'images/minimalist-black-watch.jpg',
      hoverImage:'images/modern-white-designer-sneakers.jpg',
      description: 'High-quality product that meets your needs.',
    },
    {
      title: 'Product 2',
      price: 100,
      image: 'images/modern-white-designer-sneakers.jpg',
      hoverImage:'images/minimalist-black-watch.jpg',
      description: 'Stylish and durable, perfect for everyday use.',
    },
    {
      title: 'Product 3',
      price: 100,
      image: 'images/premium-black-leather-jacket.jpg',
      hoverImage:'images/minimalist-black-watch.jpg',
      description: 'Premium leather jacket, stylish and comfortable.',
    },
    {
      title: 'Product 4',
      price: 100,
      image: 'images/luxury-black-sunglasses.jpg',
      hoverImage:'images/minimalist-black-watch.jpg',
      description: 'Luxury sunglasses with modern design.',
    },
    {
      title: 'Product 5',
      price: 100,
      image: 'images/premium-black-backpack.jpg',
      hoverImage:'images/minimalist-black-watch.jpg',
      description: 'Durable and spacious black backpack.',
    },
  ];
}
