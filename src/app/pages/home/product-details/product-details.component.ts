import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
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
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  productData = {
    id: '1',
    name: 'Premium Leather Jacket',
    price: 299,
    originalPrice: 399,
    images: ['images/men1.jpg', 'images/men2.jpg', 'images/men3.jpg'],
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

  selectedImage = 0;
  selectedSize: string | null = null;
  quantity = 1;
  isWishlisted = false;
  activeTab: 'details' | 'sizing' | 'reviews' = 'details';
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const productId = this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.getProductById(id);
    });
    console.log(productId);
  }
  productDetails: any;
  getProductById(id: number) {
    this.productsService.getProductById(id).subscribe({
      next: (res) => {
        this.productDetails = res;
        console.log(this.productDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get maxQuantity() {
    if (!this.selectedSize) return 1;
    const size = this.productData.sizes.find(
      (s) => s.name === this.selectedSize
    );
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
      quantity: this.quantity,
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
