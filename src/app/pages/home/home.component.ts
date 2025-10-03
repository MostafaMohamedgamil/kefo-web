import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  hovered: any = null;
hoveredId: number | null = null;

  // Swiper configuration
  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  ngOnInit() {
    // Swiper is automatically initialized through custom elements
  }

  products = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      image: 'images/minimalist-black-watch.jpg',
      imageWomen: 'images/women2.jpg',
      imageWomenHover: 'images/womenHover2.jpg',
      hoverImage: 'images/modern-white-designer-sneakers.jpg',
      description: 'High-quality product ',
      stock: '10 In Stock',
    },
    {
      id: 1,
      title: 'Product 2',
      price: 100,
      image: 'images/modern-white-designer-sneakers.jpg',
      imageWomen: 'images/women5.jpg',
      imageWomenHover: 'images/womenHover5.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Stylish and durable, ',
      stock: '10 In Stock',
    },
    {
      id: 1,
      title: 'Product 3',
      price: 100,
      image: 'images/premium-black-leather-jacket.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      imageWomen: 'images/women1.jpg',
      imageWomenHover: 'images/womenHover1.jpg',
      description: 'Premium leather jacket',
      stock: '10 In Stock',
    },
    {
      id: 1,
      title: 'Product 4',
      price: 100,
      image: 'images/luxury-black-sunglasses.jpg',
      imageWomen: 'images/women3.jpg',
      imageWomenHover: 'images/womenHover3.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Luxury sunglasses with modern design.',
      stock: '10 In Stock',
    },
    {
      id: 1,
      title: 'Product 5',
      price: 100,
      image: 'images/premium-black-backpack.jpg',
      imageWomen: 'images/women4.jpg',
      imageWomenHover: 'images/womenHover4.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description: 'Durable and spacious black backpack.',
      stock: '10 In Stock',
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
