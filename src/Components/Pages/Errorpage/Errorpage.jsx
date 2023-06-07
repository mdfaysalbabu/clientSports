import { Link } from "react-router-dom";
import { FiAlertTriangle } from 'react-icons/fi';

const Errorpage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-md p-8 max-w-sm mx-auto">
          <div className="flex items-center justify-center">
            <FiAlertTriangle className="text-red-500 text-6xl" />
          </div>
          <h1 className="text-4xl text-red-500 font-bold mb-4">404</h1>
          <p className="text-gray-700 text-lg mb-4">Oops! Page not found.</p>
          <p className="text-gray-600">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
