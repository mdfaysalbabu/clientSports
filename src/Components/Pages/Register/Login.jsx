import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const {login}=useContext(AuthContext)
  const navigate=useNavigate();
  const location=useLocation();
  const from =location.state?.from?.pathname||"/";
  
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data =>{
    login(data.email,data.password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user login successfully',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-purple-300">
        <div className="w-full md:w-96 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl text-center font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.email && (
                <span className="text-red-600">Name is required</span>
              )}
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
                {...register("password", { required: true })}
                id="password"
                name="password"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.password && (
                <span className="text-red-600">Name is required</span>
              )}
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
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
