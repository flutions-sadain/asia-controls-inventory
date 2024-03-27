import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import {
  MainRouter, 
  Dashboard,
  Products,
  Vendors,
  Purchase,
  Customers,
  Sales,
  Inventory,
  Login
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainRouter />} >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="customers" element={<Customers />} />
            <Route path="sales" element={<Sales />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
