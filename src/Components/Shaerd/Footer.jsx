import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-2xl font-bold mb-4">Company Name</h3>
            <div className="flex items-center text-gray-200 mb-2">
              <svg
                className="w-5 h-5 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-6h2v-2h-2zm0-8h2v2h-2v-2z" />
              </svg>
              <p>123 Street, City, Country</p>
            </div>
            <div className="flex items-center text-gray-200 mb-2">
              <svg
                className="w-5 h-5 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 14h2v-2h-2v2zm0-4h2V7h-2v5z" />
              </svg>
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center text-gray-200 mb-2">
              <svg
                className="w-5 h-5 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C5.373 2 0 7.373 0 14s5.373 12 12 12s12-5.373 12-12S18.627 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8 4.411 0 8 3.589 8 8 0 4.411-3.589 8-8 8zm-.5-3h1v-1.5h1.5V15h1v1.5h1.5V17h-1.5v1h-1v-1h-1.5v-1.5H11V17zm0-4.5h1V8h-1v4.5h1zm4.5 4.5h-1v1h-1.5v-1h-1v-1.5h1v-1h-1.5V11h-1v1h-1.5v-1h-1v1H8V11h1V9.5h-1v-1h1V7h1v1h1.5V7h1v1.5H13v1h1.5v-1H16v1h1.5V9.5h-1v-1H17v-1h-1.5v1H14V8h-1v1h-1.5V8h-1v1H10V8h1V7h1.5v1H13v1.5h1z" />
              </svg>
              <p>info@example.com</p>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-200 hover:text-white hover:underline mr-4"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 5.523 4.48 10 10 10s10-4.477 10-10c0-5.52-4.48-10-10-10zm3.707 7.293c.178-.186.293-.443.293-.793 0-.659-.535-1.194-1.194-1.194-.426 0-.789.217-.989.531-.182-.278-.493-.531-.916-.531-.659 0-1.194.535-1.194 1.194 0 .35.115.607.293.793-1.03.141-1.827 1.065-1.827 2.207 0 1.231.997 2.229 2.229 2.229.56 0 1.065-.206 1.465-.539.537.303 1.148.483 1.805.483 2.485 0 4.5-2.015 4.5-4.5-.001-2.142-1.796-4.066-3.395-4.207z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white hover:underline mr-4"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.485 2 2 6.485 2 12c0 5.515 4.485 10 10 10s10-4.485 10-10c0-5.515-4.485-10-10-10zm0 1.764c4.397 0 7.958 3.56 7.958 7.936 0 4.374-3.56 7.935-7.958 7.935-4.397 0-7.958-3.561-7.958-7.935 0-4.376 3.561-7.936 7.958-7.936zm-.207 1.413a1.88 1.88 0 0 0-1.877 1.877c0 .285.061.558.169.798h-.642v1.764h2.31c-.07.41-.283.767-.598 1.06-.317.292-.729.47-1.18.47-.457 0-.87-.178-1.187-.47-.316-.293-.528-.65-.598-1.06h-.92v-1.764h.92c.07-.41.282-.767.598-1.06.317-.292.73-.47 1.187-.47h1.642v1.878zm1.898 3.32v1.646h-1.278v-1.646h1.278zm-2.48 0v1.646h-1.279v-1.646h1.279zm-2.464 0v1.646H6.477v-1.646h1.27zm-2.478 0v1.646H3v-1.646h1.274zm2.477 2.482v1.646H6.477v-1.646h1.27zm2.478 0v1.646h-1.278v-1.646h1.278zm2.464 0v1.646h-1.27v-1.646h1.27zm2.48 0v1.646H19v-1.646h-1.273zm-3.72 2.48v1.647h-1.279v-1.647h1.279zm-2.465 0v1.647H10.53v-1.647h1.275zm-2.48 0v1.647H8.05v-1.647h1.273zm2.48 2.482v1.647H10.53v-1.647h1.275zm2.465 0v1.647h-1.27v-1.647h1.27zm2.48 0v1.647H15v-1.647h-1.274zm-4.943 2.481v1.648h-1.28v-1.648h1.28zm2.464 0v1.648h-1.27v-1.648h1.27z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white hover:underline"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.5 2h-9C5.01 2 4 3.01 4 4.5v15C4 20.99 5.01 22 6.5 22h9c1.49 0 2.5-1.01 2.5-2.5v-15C19 3.01 17.99 2 16.5 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6zm-8-8H7V7h2v2zm0 4H7V7h2v2zm0 4H7v-2h2v2z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Links</h3>
            <ul className="flex flex-col md:flex-row">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white hover:underline mb-2 md:mr-4"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white hover:underline mb-2 md:mr-4"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white hover:underline mb-2 md:mr-4"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white hover:underline mb-2 md:mr-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
