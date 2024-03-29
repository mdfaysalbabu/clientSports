import { useLoaderData } from "react-router-dom";

const Enroll = () => {
  const enrollData = useLoaderData();
  console.log(enrollData);
  return (
    <div>
      <div className="bg-pink-200 rounded-lg shadow-lg p-4 overflow-x-auto ms-5">
        <table className="w-full table-fixed">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Image</th>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Class Name</th>
              <th className="w-1/4 px-4 py-2 sm:w-auto">User Email</th>
              <th className="w-1/4 px-4 py-2 sm:w-auto">Price</th>
            </tr>
          </thead>
          <tbody>
            {enrollData.map((item) => (
              <tr className="bg-white" key={item._id}>
                <td className="border px-4 py-2 sm:w-auto"><img src={item.photo} alt="" /></td>
                <td className="border px-4 py-2 sm:w-auto">{item.name}</td>
                <td className="border px-4 py-2 sm:w-auto">{item.email}</td>
                <td className="border px-4 py-2 sm:w-auto">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enroll;
