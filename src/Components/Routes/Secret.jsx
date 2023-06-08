import React from "react";
import { FiHome, FiUsers, FiShoppingBag, FiPackage } from 'react-icons/fi';

const Secret = () => {
  return (
    <aside className="bg-purple-700 text-white h-screen w-64">
  <div className="py-4 px-6">
    <h1 className="text-2xl font-bold">Dashboard</h1>
  </div>
  <nav className="px-6">
    <ul className="space-y-2">
      <li>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
        >
          <FiHome className="h-5 w-5 mr-2" />
          Dashboard
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
        >
          <FiUsers className="h-5 w-5 mr-2" />
          Users
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
        >
          <FiShoppingBag className="h-5 w-5 mr-2" />
          Products
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
        >
          <FiPackage className="h-5 w-5 mr-2" />
          Orders
        </a>
      </li>
    </ul>
  </nav>
  <div className="flex items-center justify-center py-4">
    <img
      src="/path/to/outlet-image.jpg"
      alt="Outlet"
      className="h-12 w-12 rounded-full"
    />
    <div className="ml-4">
      <h2 className="text-lg font-semibold">Outlet Name</h2>
      <p className="text-sm text-gray-400">Outlet Location</p>
    </div>
  </div>
</aside>
  );
};

export default Secret;
