export interface Product {
  images: string[];
  title: string;
  price: number;
  availabilityStatus: string;
  id:number
}

export interface CardProps {
  product: Product;
}