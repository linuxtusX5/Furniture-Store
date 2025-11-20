export interface Category {
  id: number;
  name: string;
  image: string | null;
  description: string;
  slug: string;
}
export interface Product {
  id: number;
  category: number;
  category_name: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  stock: number;
  image: string | null;
  available: boolean;
  created_at: string;
}
export interface CartItem {
  product: Product;
  quantity: number;
}
export interface OrderItem {
  product_id: number;
  quantity: number;
}
export interface OrderData {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  items: OrderItem[];
}
