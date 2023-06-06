const Register = () => {
  return (
    <div className="">
      <div className="flex items-center h-screen bg-gray-600 justify-center ">
        <div className="container mx-auto px-4 md:flex">
          <div className="md:w-1/2">
            <img
              src="https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 bg-white py-8 px-6">
            <h2 className="text-3xl font-bold mb-4">Create an Account</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
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
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Photo url:
                </label>
                <input
                  type="text"
                  id="confirmPassword"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
