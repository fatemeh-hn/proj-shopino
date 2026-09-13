export interface Product {
  images: string[];
  title: string;
  price: number;
  availabilityStatus: string;
  category:string;
  id:number
}

export interface CardProps {
  product: Product;
}