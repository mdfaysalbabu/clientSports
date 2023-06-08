import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-white">
            <img
              src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg"
              alt="Website Logo"
              className="h-10 w-10 mb-4"
            />
            <p>
              Sports Academy is a leading provider of sports training and
              coaching. We offer a wide range of programs and classes for
              individuals of all ages and skill levels. 
            </p>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <p>123 Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-4">Services</h1>
            <ul>
              <li>Sports Training</li>
              <li>Personal Coaching</li>
              <li>Fitness Classes</li>
              <li>Tournament Organization</li>
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-4">Follow Us</h1>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l2 2m0 0l-2 2m2-2H9.5a4.5 4.5 0 000 9H12m2.5-9v2.5m0 0h2.5m-2.5 0A2.5 2.5 0 1112 15.5V13m-2.5 0H7m0 0V9m0-2.5A2.5 2.5 0 119 4m4 1.5V7m0 2.5A2.5 2.5 0 0111 12m-4.5 3H9m3-3v3h3v-3h-3z"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your Gmail"
              className="py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-r-lg transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-purple-600 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">
            &copy; 2023 My Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
