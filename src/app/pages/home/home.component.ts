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
      title: 'Black Puffer Edge',
      price: 100,
      imageMen: 'images/men1.jpg',
      imageWomen: 'images/women2.jpg',
      imageWomenHover: 'images/womenHover2.jpg',
      imageMenHover: 'images/menHover1.jpg',
      description:
        'A modern twist on the classic puffer, the Black Puffer Edge features an oversized collar and minimalist design. Warm, water-resistant, and perfect for layering—this jacket combines comfort and style for any cold-weather outing. ',
      stock: '10 In Stock',
    },
    {
      id: 2,
      title: 'Black blazer dress',
      price: 100,
      imageMen: 'images/men2.jpg',
      imageWomen: 'images/women5.jpg',
      imageWomenHover: 'images/womenHover5.jpg',
      imageMenHover: 'images/menHover2.jpg',
      description:
        'This black blazer dress is a versatile addition to any wardrobe. With its sleek design and classic color, this dress is perfect for both formal and casual occasions. Made with high-quality materials, it offers comfort and style. Elevate your fashion game with this must-have piece. ',
      stock: '10 In Stock',
    },
    {
      id: 3,
      title: 'Black high-waist jeans with a wide legs',
      price: 100,
      imageMen: 'images/men3.jpg',
      imageMenHover: 'images/menHover3.jpg',
      imageWomen: 'images/women1.jpg',
      imageWomenHover: 'images/womenHover1.jpg',
      description:
        'The wide legs add a modern twist to the classic silhouette, creating a chic and dynamic look that effortlessly transitions from day to night. Made from premium denim fabric, these jeans offer durability and flexibility, ensuring a luxurious feel that lasts throughout the day Whether youre running errands, meeting friends for brunch, or heading out for a night on the town, these black high-waist jeans with wide legs are the perfect choice for any occasion. Pair them with a tucked-in blouse and heels for a sophisticated daytime ensemble, or dress them up with a sleek top and statement accessories for a trendy evening look.',
      stock: '10 In Stock',
    },
    {
      id: 1,
      title: 'Black Puffer Jacket',
      price: 100,
      imageMen: 'images/men4.jpg',
      imageMenHover: 'images/menHover4.jpg',
      imageWomen: 'images/women3.jpg',
      imageWomenHover: 'images/womenHover3.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description:
        "Whether you're navigating city streets or embarking on outdoor adventures, this puffer jacket ensures you stay cozy and comfortable wherever you go. The versatile black hue effortlessly complements any outfit, making it a go-to choice for everyday wear. Equipped with practical features, including a front zipper closure and zippered pockets, the MidnightShield Jacket offers convenient storage for your essentials while on the move. Its adjustable cuffs and hem allow for a customizable fit, ensuring maximum comfort and versatility.",
      stock: '10 In Stock',
    },
    {
      id: 1,
      title: 'Green long wool coat',
      price: 100,
      imageMen: 'images/men5.jpg',
      imageMenHover: 'images/menHover5.jpg',
      imageWomen: 'images/women4.jpg',
      imageWomenHover: 'images/womenHover4.jpg',
      hoverImage: 'images/minimalist-black-watch.jpg',
      description:
        'Step into timeless sophistication with our Green long wool coat, a luxurious outerwear staple that effortlessly combines style and warmth. Crafted from premium wool in a rich green hue, this coat exudes understated elegance and sophistication.Designed for both comfort and style, the Green long wool coat  features a long silhouette that drapes gracefully, providing ample coverage and a flattering fit. The plush wool fabric offers superior insulation, ensuring you stay cozy and warm during chilly days and evenings.',
      stock: '10 In Stock',
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
