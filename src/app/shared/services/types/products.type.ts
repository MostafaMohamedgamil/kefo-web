export type ProductsResponse = ProductsData[];

export interface ProductsData {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string;
  isActive: boolean;
  mainImageUrl: string;
  hoverImageUrl?: string;
  categoryName: string;
  productImages: ProductImage[];
  productSizes: ProductSize[];
}

export interface ProductImage {
  imageUrl: string;
}

export interface ProductSize {
  sizeId: number;
  quantity: number;
  sizeName: string;
}
