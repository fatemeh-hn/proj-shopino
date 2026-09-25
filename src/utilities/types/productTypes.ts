export interface Product {
  images: string[];
  title: string;
  price: number;
  availabilityStatus: string;
  category: string;
  id: number;
  brand: string;
  rating: number;
  description: string;
  sku: string;
  tags: string[];
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  reviews:Reviews[];
  discountPercentage:number;
}


export interface CardProps {
  product: Product;
}

export interface Reviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;

}
