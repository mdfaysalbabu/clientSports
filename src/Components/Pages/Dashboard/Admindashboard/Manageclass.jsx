import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const Manageclass = () => {

  const { data: classes = [], refetch } = useQuery(["class"], async () => {
    const res = await fetch("http://localhost:4000/class");
    const data = await res.json();
    return data;
  });

  const handleApprove = (item, isPending) => {
    if (isPending) {
      console.log(isPending);
      const details = { i: true };
      fetch(`http://localhost:4000/class/${item._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          console.log(data)
        });
    } else {
      const details = { i: false };
      fetch(`http://localhost:4000/class/${item._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          console.log(data)
        });
    }
  };
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
            {classes?.map((item) => (
              <tr className="bg-red-200" key={item._id}>
                <td className="border px-2 py-8">
                  <img
                    className="w-28  object-cover object-center h-28"
                    src={item.image}
                    alt="Class Image"
                  />
                </td>
                <td className="border px-2 py-8">{item.name}</td>
                <td className="border px-2 py-8 overflow-hidden whitespace-nowrap">
                  <span className="inline-block max-w-full truncate">
                    {item.instructorName}
                  </span>
                </td>
                <td className="border px-2 py-8 overflow-hidden whitespace-nowrap">
                  <span className="inline-block max-w-full ">
                    {item.instructorEmail}
                  </span>
                </td>
                <td className="border px-2 py-8">{item.seats}</td>
                <td className="border px-2 py-8">${item.price}</td>
                <td className="border px-2 py-8">
                  {item.status}
                </td>
                <td className="border px-2 py-8">
                  <button disabled={`${item.status==='approved' ||
                  item.status==='denied' ?true:''}`} 
                    onClick={() => handleApprove(item, true)}
                    className="bg-teal-500 py-3  text-white font-bold my-2 px-4 rounded mr-2 text-xs"
                  >
                    Approve
                  </button>
                  <button disabled={`${item.status==='approved' ||
                  item.status==='denied' ?true:''}`} 
                    onClick={() => handleApprove(item, false)}
                    className="bg-red-500  text-white font-bold py-2 px-4 rounded mr-2 text-xs my-2"
                  >
                    Deny
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
            {/* Add more table rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageclass;
