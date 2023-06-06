import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-purple-300">
        <div className="w-full md:w-96 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl text-center font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p>
            New Here Create an account<Link className="text-red-400" to="/register"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
