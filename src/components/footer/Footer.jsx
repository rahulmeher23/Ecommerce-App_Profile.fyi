import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Open Fashion </h2>
          <p className="text-sm mb-4">Discover the Essence of Luxury Fashion</p>
          <p className="text-sm">&copy; 2024 [Brand Name]. All Rights Reserved.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
          <ul className="text-sm">
            <li className="mb-1">
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-gray-400">Shipping & Returns</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Size Guide</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Pinterest</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
