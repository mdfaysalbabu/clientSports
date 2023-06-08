import { useState } from "react";

const Addclass = () => {
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddClass = (e) => {
    e.preventDefault();

    // Form validation and class addition logic here
    // You can use the state values to create a new class object and add it to your class list or database

    // Reset form fields
    setClassName("");
    setClassImage("");
    setAvailableSeats(0);
    setPrice(0);
  };
  return (
    <div>
      <form
        onSubmit={handleAddClass}
        className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Addclass;
