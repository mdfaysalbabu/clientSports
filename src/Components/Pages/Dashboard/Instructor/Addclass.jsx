import { useState } from "react";
import { useForm } from "react-hook-form";

const Addclass = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddClass = (data) => {
    console.log(data)
  };
  
  return (
    <div className="bg-teal-400">
      <form
        onSubmit={handleSubmit(handleAddClass)}
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
            value={className}
            onChange={(e) => setClassName(e.target.value)}
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
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
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
            readOnly
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
            readOnly
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
            value={availableSeats}
            onChange={(e) => setAvailableSeats(parseInt(e.target.value))}
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
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 "
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addclass;
