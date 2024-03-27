import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (

    <aside id="sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0`} aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul class="space-y-2 font-medium">
            <li>
              <a href="/" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/products" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a href="/vendors" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Vendors</span>
              </a>
            </li>
            <li>
              <a href="/purchase" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Purchase</span>
              </a>
            </li>
            <li>
              <a href="/customers" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Customers</span>
              </a>
            </li>
            <li>
              <a href="/sales" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Sales</span>
              </a>
            </li>
            <li>
              <a href="/inventory" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Inventory</span>
              </a>
            </li>
            <li>
              <a href="/login" class="flex items-center p-2 text-gray-900 border-b-2  hover:bg-gray-100 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Sidebar;