import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-20">
        <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full ">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: true })}
                className="form-input mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                name='email'
                className="form-input mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="photoUrl" className="block text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                id="photoUrl"
                name="photoURL"
                {...register("photoURL", { required: true })}
                className="form-input mt-1 block w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
              />
              {errors.photoURL && (
                <span className="text-red-600">PhotoUrl is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                id="password"
                name="password"
                className="form-input mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600"> password must be 6 character</p>
              )}
              {errors.password?.type === "minlength" && (
                <p className="text-red-600"> password must be 6 character</p>
              )}
              {errors.password?.type === "maxlength" && (
                <p className="text-red-600">
                  {" "}
                  password must be less then 20 character
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                id="confirmPassword"
                name="confirmPassword"
                className="form-input mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
