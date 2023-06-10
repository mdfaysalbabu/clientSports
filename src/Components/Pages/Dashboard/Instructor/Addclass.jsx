import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Addclass = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (classData) => {
    fetch("http://localhost:4000/class", {
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
        } else {
          console.log("error");
        }
      });
  };

  return (
    <div className="bg-teal-400">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 bg-teal-400 rounded-lg shadow-lg"
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
            {...register("name", { required: true })}
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
            name="instructorName"
            {...register("instructorName", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            // value={instructor.displayName}
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
            name="instructorEmail"
            {...register("instructorEmail", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            // value={instructor.email}
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
        <div className="text-center">
          <input type="submit" value="Add class" />
        </div>
      </form>
    </div>
  );
};

export default Addclass;
