import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';

export const SalesReport = () => {
  const { products } = useProducts();

  const totalSales = products.reduce((acc, product: Product) => acc + product.price * (product.salesCount || 0), 0);

  return (
    <div>
      <h2>Sales Report</h2>
      <h3>Total Sales: ${totalSales.toFixed(2)}</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Sales Count</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.salesCount || 0}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>${(product.price * (product.salesCount || 0)).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};