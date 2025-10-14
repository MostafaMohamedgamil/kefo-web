export type ProductsResponse = ProductsData[]

export interface ProductsData {
  id: number
  name: string
  description: string
  price: number
  color: string
  isActive: boolean
  mainImageUrl: string
  hoverImageUrl?: string
  productImages: ProductImage[]
  productSizes: any[]
}

export interface ProductImage {
  imageUrl: string
}
