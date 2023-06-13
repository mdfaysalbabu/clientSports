import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

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
      navigate(from,{replace:true});
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  //hide/visible
  const [visible, setVisible] = useState(false);
  const handlePassword = () => {
    setVisible(!visible);
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-purple-200 mb-10">
        <div className="w-full md:w-96 bg-teal-500 rounded-lg shadow-md p-8">
          <h2 className="text-2xl text-center text-red-700 font-bold mb-6">Login</h2>
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
                type={visible ? 'text' : 'password'}
                {...register("password", { required: true })}
                id="password"
                name="password"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <button className="relative -top-8 left-72 text-xl w-fit" onClick={handlePassword}>
                {
                  visible ? <FaRegEye /> : <FaEyeSlash />
                }
              </button>
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full  text-white py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-purple-500"
            >
              Login
            </button>
          </form>
          <p className="text-lg">
            New Here Create an account<Link className="text-orange-600" to="/register"> Register</Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
