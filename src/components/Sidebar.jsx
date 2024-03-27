import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (

    <aside id="sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0`} aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul class="space-y-2 font-medium">
            <li>
              <Link to="/" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/products" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/vendors" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Vendors</span>
              </Link>
            </li>
            <li>
              <Link to="/purchase" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Purchase</span>
              </Link>
            </li>
            <li>
              <Link to="/customers" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/sales" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Sales</span>
              </Link>
            </li>
            <li>
              <Link to="/inventory" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Inventory</span>
              </Link>
            </li>
            <li>
              <Link to="/login" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Sidebar;