import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Size {
  name: string;
  available: boolean;
  inStock: number;
}

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isSale: boolean;
  originalPrice?: number;
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productData = {
    id: '1',
    name: 'Premium Leather Jacket',
    price: 299,
    originalPrice: 399,
    images: [
      'images/person.jpg',
      'images/premium-black-leather-jacket.jpg',
      'images/premium-black-leather-jacket.jpg',
    ],
    rating: 4.8,
    reviewCount: 124,
    description:
      'Crafted from the finest Italian leather, this premium jacket combines timeless style with modern functionality. Features include a tailored fit, premium hardware, and exceptional durability.',
    features: [
      '100% Genuine Italian Leather',
      'YKK Premium Zippers',
      'Tailored Fit Design',
      'Multiple Interior Pockets',
      'Water-Resistant Treatment',
    ],
    sizes: [
      { name: 'XS', available: false, inStock: 0 },
      { name: 'S', available: true, inStock: 3 },
      { name: 'M', available: true, inStock: 8 },
      { name: 'L', available: true, inStock: 5 },
      { name: 'XL', available: true, inStock: 2 },
      { name: 'XXL', available: false, inStock: 0 },
    ] as Size[],
    isNew: false,
    isSale: true,
    category: 'Outerwear',
  };

  sizeChart = [
    { size: 'XS', chest: '34-36', waist: '28-30', length: '25' },
    { size: 'S', chest: '36-38', waist: '30-32', length: '26' },
    { size: 'M', chest: '38-40', waist: '32-34', length: '27' },
    { size: 'L', chest: '40-42', waist: '34-36', length: '28' },
    { size: 'XL', chest: '42-44', waist: '36-38', length: '29' },
    { size: 'XXL', chest: '44-46', waist: '38-40', length: '30' },
  ];

  relatedProducts: RelatedProduct[] = [
    {
      id: '2',
      name: 'Designer Sneakers',
      price: 189,
      image: 'images/person.jpg',
      rating: 4.6,
      reviewCount: 89,
      isNew: true,
      isSale: false,
    },
    {
      id: '3',
      name: 'Minimalist Watch',
      price: 249,
      image: 'images/person.jpg',
      rating: 4.9,
      reviewCount: 156,
      isNew: false,
      isSale: false,
    },
    {
      id: '4',
      name: 'Luxury Sunglasses',
      price: 159,
      originalPrice: 199,
      image: 'images/luxury-black-sunglasses.jpg',
      rating: 4.7,
      reviewCount: 73,
      isNew: false,
      isSale: true,
    },
  ];

  selectedImage = 0;
  selectedSize: string | null = null;
  quantity = 1;
  isWishlisted = false;
  activeTab: 'details' | 'sizing' | 'reviews' = 'details';

  get maxQuantity() {
    if (!this.selectedSize) return 1;
    const size = this.productData.sizes.find(s => s.name === this.selectedSize);
    return size ? size.inStock : 1;
  }

  handleAddToCart() {
    if (!this.selectedSize) {
      alert('Please select a size');
      return;
    }
    console.log('Added to cart:', {
      productId: this.productData.id,
      size: this.selectedSize,
      quantity: this.quantity
    });
  }

  handleAddToWishlist() {
    this.isWishlisted = !this.isWishlisted;
    console.log('Added to wishlist:', this.productData.id);
  }

  changeQuantity(val: number) {
    if (val > 0 && val <= this.maxQuantity) {
      this.quantity = val;
    }
  }
}
