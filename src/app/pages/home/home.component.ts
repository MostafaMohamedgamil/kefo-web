import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  hovered: any = null;
hoveredId: number | null = null;

  products = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      image: 'images/minimalist-black-watch.jpg',
      hoverImage: 'images/modern-white-designer-sneakers.jpg',
      description: 'High-quality product that meets your needs.',
    },
    {
      id: 1,
      title: 'Product 2',
      price: 100,
      image: 'images/modern-white-designer-sneakers.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Stylish and durable, perfect for everyday use.',
    },
    {
      id: 1,
      title: 'Product 3',
      price: 100,
      image: 'images/premium-black-leather-jacket.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Premium leather jacket, stylish and comfortable.',
    },
    {
      id: 1,
      title: 'Product 4',
      price: 100,
      image: 'images/luxury-black-sunglasses.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Luxury sunglasses with modern design.',
    },
    {
      id: 1,
      title: 'Product 5',
      price: 100,
      image: 'images/premium-black-backpack.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Durable and spacious black backpack.',
    },
     {
      id: 1,
      title: 'Product 5',
      price: 100,
      image: 'images/premium-black-backpack.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Durable and spacious black backpack.',
    },
  ];
  items = [
    {
      title: 'Artisan Craftsmanship',
      desc: 'Every piece is meticulously crafted by skilled artisans using time-honored techniques.',
    },
    {
      title: 'Sustainable Luxury',
      desc: "We're committed to responsible sourcing and sustainable practices without compromising quality.",
    },
    {
      title: 'Timeless Design',
      desc: 'Our designs blend contemporary aesthetics with classic elegance for lasting appeal.',
    },
  ];
}
