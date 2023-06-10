const MyClass = () => {
  return (
    <div>
      <div className="container mx-auto p-4 bg-teal-300">
        <div className="bg-awesome rounded-lg p-4">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Total Enrolled Students</th>
                <th className="px-4 py-2">Feedback</th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Feedback Button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-2">25</td>
                <td className="px-4 py-2">Great class!</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => ("Pending")}
                  >
                    Feedback
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-2">50</td>
                <td className="px-4 py-2">Excellent course material!</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => ("Approved")}
                  >
                    Feedback
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <span className="bg-red-500 text-white px-2 py-1 rounded">
                    Denied
                  </span>
                </td>
                <td className="px-4 py-2">10</td>
                <td className="px-4 py-2">Needs improvement in content.</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => ("Denied")}
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
