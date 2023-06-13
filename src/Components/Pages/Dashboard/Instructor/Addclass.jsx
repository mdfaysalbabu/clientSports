import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/Authprovider";

const Addclass = () => {
  const {user}=useContext(AuthContext)
  // console.log(user?.email);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (classData) => {
    console.log(classData);
    fetch("https://sports-academy-server-pi.vercel.app/class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " add in the class",
            showConfirmButton: false,
            timer: 1500,
            
          });
          reset();
        } else {
          console.log("error");
        }
      });
  };

  return (
    <div className=" w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 bg-teal-400 rounded-lg shadow-lg m-10"
      >
        <div className="mb-4">
          <label
            htmlFor="className"
            className="text-gray-700 font-semibold mb-2"
          >
            Class Name
          </label>
          <input
            type="text"
            id="className"
            name="name"
            {...register("name", {required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="classImage"
            className="text-gray-700 font-semibold mb-2"
          >
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            name="image"
            {...register("image", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className="text-gray-700 font-semibold mb-2"
          >
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            defaultValue={user?.displayName} readOnly
            {...register("instructorName", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className="text-gray-700 font-semibold mb-2"
          >
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            defaultValue={user?.email} readOnly
            {...register("instructorEmail", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className="text-gray-700 font-semibold mb-2"
          >
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            name="seats"
            {...register("seats", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-700 font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            {...register("price", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="text-gray-700 font-semibold mb-2">
            status
          </label>
          <input
            type="text"
             defaultValue={'pending'}
             readOnly
            {...register("status", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4 hidden">
          <label htmlFor="status" className="text-gray-700 font-semibold mb-2">
            Enrolled
          </label>
          <input
            type="text"
             defaultValue={0}
             readOnly
            {...register("enrolledStudents", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <input className="bg-gradient-to-r btn from-purple-500 to-red-400 hover:from-teal-400 hover:to-yellow-500  text-white font-semibold  hover:text-white transition-all duration-300" type="submit" value="Add class" />
        </div>
      </form>
    </div>
  );
};

export default Addclass;
