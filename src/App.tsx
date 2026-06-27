import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SalesReport from './components/SalesReport';
import InventoryManagement from './components/InventoryManagement';
import CustomerManagement from './components/CustomerManagement';
import OrderProcessing from './components/OrderProcessing';

const App = () => {
  return (
    <div>
      <h1>Sales Management App</h1>
      <ProductForm />
      <ProductList />
      <SalesReport />
      <InventoryManagement />
      <CustomerManagement />
      <OrderProcessing />
    </div>
  );
};

export default App;