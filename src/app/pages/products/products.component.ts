import { Component } from '@angular/core';
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isNew: boolean;
  isSale: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
 allProducts: Product[] = [
    { id: '1', name: 'Premium Leather Jacket', price: 299, originalPrice: 399, image: 'images/premium-black-leather-jacket.jpg', rating: 4.8, reviewCount: 124, category: 'Outerwear', isNew: false, isSale: true },
    { id: '2', name: 'Designer Sneakers', price: 189, image: 'images/modern-white-designer-sneakers.jpg', rating: 4.6, reviewCount: 89, category: 'Footwear', isNew: true, isSale: false },
    { id: '3', name: 'Minimalist Watch', price: 249, image: 'images/minimalist-black-watch.jpg', rating: 4.9, reviewCount: 156, category: 'Accessories', isNew: false, isSale: false },
    { id: '4', name: 'Luxury Sunglasses', price: 159, originalPrice: 199, image: 'images/luxury-black-sunglasses.jpg', rating: 4.7, reviewCount: 73, category: 'Accessories', isNew: false, isSale: true },
    { id: '5', name: 'Premium Backpack', price: 129, image: 'images/premium-black-backpack.jpg', rating: 4.5, reviewCount: 92, category: 'Bags', isNew: true, isSale: false },
    { id: '6', name: 'Wireless Headphones', price: 199, image: 'images/minimalist-black-watch.jpg', rating: 4.8, reviewCount: 201, category: 'Electronics', isNew: false, isSale: false },
    { id: '7', name: 'Classic Denim Jacket', price: 149, image: 'images/premium-black-leather-jacket.jpg', rating: 4.4, reviewCount: 67, category: 'Outerwear', isNew: false, isSale: false },
    { id: '8', name: 'Leather Boots', price: 229, originalPrice: 279, image: 'images/modern-white-designer-sneakers.jpg', rating: 4.7, reviewCount: 143, category: 'Footwear', isNew: false, isSale: true },
  ];

  categories: string[] = ['All', 'Outerwear', 'Footwear', 'Accessories', 'Bags', 'Electronics'];

  searchQuery: string = '';
  selectedCategory: string = 'All';
  sortBy: string = 'featured';
  viewMode: 'grid' | 'list' = 'grid';
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filteredProducts = [...this.allProducts];
  }

  handleSearch(query: string) {
    this.searchQuery = query;
    this.filterProducts();
  }

  handleCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  handleSortChange(sort: string) {
    this.sortBy = sort;
    this.filterProducts();
  }

  filterProducts() {
    let filtered = [...this.allProducts];

    // Search
    if (this.searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    // Sort
    switch (this.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    this.filteredProducts = filtered;
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.sortBy = 'featured';
    this.filteredProducts = [...this.allProducts];
  }

  handleAddToCart(productId: string) {
    console.log('Added to cart:', productId);
  }

  handleAddToWishlist(productId: string) {
    console.log('Added to wishlist:', productId);
  }
}
