const Manageclass = () => {
  return (
    <div>
      <div className="bg-gray-100 rounded-lg shadow-lg p-4 overflow-x-auto">
        <table className="w-full table-fixed">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="w-1/10 px-2 py-4">Class Image</th>
              <th className="w-1/6 px-2 py-4">Class Name</th>
              <th className="w-1/10 px-2 py-4">Instructor Name</th>
              <th className="w-1/5 px-2 py-4">Instructor Email</th>
              <th className="w-1/10 px-2 py-4">Available Seats</th>
              <th className="w-1/10 px-2 py-4">Price</th>
              <th className="w-1/10 px-2 py-4">Status</th>
              <th className="w-1/8 px-2 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-2 py-8">
                <img
                  className="w-28  object-cover object-center h-28"
                  src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg"
                  alt="Class Image"
                />
              </td>
              <td className="border px-2 py-8">Football Class</td>
              <td className="border px-2 py-8 overflow-hidden whitespace-nowrap">
                <span className="inline-block max-w-full truncate">
                  Moon
                </span>
              </td>
              <td className="border px-2 py-8 overflow-hidden whitespace-nowrap">
                <span className="inline-block max-w-full ">
                  john.doe@  example.com
                </span>
              </td>
              <td className="border px-2 py-8">10</td>
              <td className="border px-2 py-8">$100</td>
              <td className="border px-2 py-8">Pending</td>
              <td className="border px-2 py-8">
                <button className="bg-green-500 py-3 hover:bg-green-700 text-white font-bold my-2 px-4 rounded mr-2 text-xs">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 text-xs my-2">
                  Deny
                </button>
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-xs">
                  Send Feedback
                </button>
              </td>
            </tr>
            {/* Add more table rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageclass;
