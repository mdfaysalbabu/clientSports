import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { Button } from "react-bootstrap";

const Errorpage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-400 to-green-300">
        <div className="text-6xl font-bold text-white mb-4">404</div>
        <div className="text-3xl font-bold text-white mb-8">Page Not Found</div>
        <img
          src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg"
          alt="Awesome Image"
          className="w-64 mb-8 rounded-full shadow-lg"
        />
        <Button
          as={Link}
          to="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Errorpage;
