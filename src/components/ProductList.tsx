import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';

export const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products && products.map((product: Product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};