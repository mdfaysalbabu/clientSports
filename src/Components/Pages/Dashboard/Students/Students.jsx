import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div>
      <div className="uppercase font-bold flex justify-evenly h-[80px] items-center">
        <h3 className="3xl">Total Items </h3>
        <h3 className="3xl">Total Price: </h3>
        <Link to="/dashboard/payment">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Proceed to Payment
          </button>
        </Link>
      </div>
      <div className="bg-pink-200 rounded-lg shadow-lg p-4 overflow-x-auto ms-5">
        <table className="w-full table-fixed">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Class Name</th>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Instructor Name</th>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Available Seats</th>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Price</th>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2 sm:w-auto">Class A</td>
              <td className="border px-4 py-2 sm:w-auto">John Doe</td>
              <td className="border px-4 py-2 sm:w-auto">10</td>
              <td className="border px-4 py-2 sm:w-auto">$100</td>
              <td className="border px-4 py-2 sm:w-auto">
                <Link to="/dashboard/payment">
                  <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Proceed to Payment
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2 sm:w-auto">Class B</td>
              <td className="border px-4 py-2 sm:w-auto">Jane Smith</td>
              <td className="border px-4 py-2 sm:w-auto">15</td>
              <td className="border px-4 py-2 sm:w-auto">$120</td>
              <td className="border px-4 py-2 sm:w-auto">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Enroll
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
