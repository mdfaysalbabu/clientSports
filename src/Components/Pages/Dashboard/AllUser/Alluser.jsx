import { useQuery } from "@tanstack/react-query";

import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const Alluser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:4000/users");
    const data = await res.json();
    return data;
  });
  const handleAdmin = (user) => {
    fetch(`http://localhost:4000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is and admin ready`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mb-5">
        {" "}
        All user: {users.length}
      </h2>
      <div className="container mx-auto">
        <table className="table-auto w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-100">Name</th>
              <th className="px-4 py-3 bg-gray-100">Email</th>
              <th className="px-4 py-3 bg-gray-100">Roll</th>
              <th className="px-4 py-3 bg-gray-100">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border px-3 py-3">{user.name}</td>
                <td className="border px-3 py-3">{user.email}</td>
                <td className="border px-3 py-3">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className=" btn-ghost bg-purple-500 btn text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td className="border px-3 py-3">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
