import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password === confirmPassword) {
      console.log("equal");
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUser(data.name, data.photoURL)
            .then(() => {
              const saveUser={name:data.name,email:data.email}
              console.log(saveUser)
              fetch('http://localhost:4000/users',{
                method:"POST",
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.insertedId){
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  logout().then(() => {
                    navigate("/");
                  });
                }
              })

              
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen bg-violet-400 p-40">
        <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full ">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                name="email"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                {...register("password", {
                  pattern: /(?=.*[0-9].*[0-9])/,
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Enter Password"
                className="input input-bordered"
              />
              <p
                className=" rounded-lg bg-black text-white"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </p>
              {errors.password && (
                <span className=" text-red-500">Password Length 6 to </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className=" text-red-500">
                  Ensure string has two digits
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", {
                  pattern: /(?=.*[0-9].*[0-9])/,
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match.",
                })}
                placeholder="Enter Password"
                className="input input-bordered"
              />
              {/* <button className=" rounded-lg bg-black text-white" onClick={handleTogglePasswordVisibility}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </button> */}
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
              {/* {errors.password && <span className=" text-red-500"> ||{errors.confirmPassword.message} </span>} */}
              {errors.password?.type === "pattern" && (
                <span className=" text-red-500">
                  Ensure string has two digits
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Register
            </button>
          </form>
          <p>
            New Here Create an account
            <Link className="text-red-400" to="/login">
              {" "}
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
