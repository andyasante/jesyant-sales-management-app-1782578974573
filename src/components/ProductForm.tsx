import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';

export const ProductForm = ({ productToEdit }: { productToEdit?: Product }) => {
  const { addProduct, updateProduct } = useProducts();
  const [name, setName] = useState(productToEdit ? productToEdit.name : '');
  const [price, setPrice] = useState(productToEdit ? productToEdit.price : 0);
  const [quantity, setQuantity] = useState(productToEdit ? productToEdit.quantity : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = { name, price, quantity };

    if (productToEdit) {
      updateProduct({ ...productToEdit, ...product });
    } else {
      addProduct(product);
    }

    setName('');
    setPrice(0);
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
      </div>
      <button type="submit">{productToEdit ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};