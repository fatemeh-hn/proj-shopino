export interface Product {
  images: string[];
  title: string;
  price: number;
  availabilityStatus: string;
  category:string;
  id:number
  brand:string;
  rating:number
  description:string
  sku:string
  tags:string[]
  weight:number
  
}

export interface CardProps {
  product: Product;
}