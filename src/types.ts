export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Sale {
  id: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  date: string;
}

export interface Customer {
  id: number;
  name: string;
  contactInfo: string;
}

export interface InventoryItem {
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  customerId: number;
  products: Array<{ productId: number; quantity: number }>;
  totalAmount: number;
  orderDate: string;
}