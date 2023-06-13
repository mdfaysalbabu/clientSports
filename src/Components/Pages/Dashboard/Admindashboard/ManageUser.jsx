import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserTag } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://sports-academy-server-pi.vercel.app/users");
    const data = await res.json();
    return data;
  });

  const handleAdmin = (user) => {
    fetch(`https://sports-academy-server-pi.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is and admin ready`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleInstructor = (user) => {
    fetch(`https://sports-academy-server-pi.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor ready`,
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
              <th className="px-4 py-3 bg-gray-100">Role</th>
              <th className="px-4 py-3 bg-gray-100">Make Admin</th>
              <th className="px-4 py-3 bg-gray-100">Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border px-3 py-3">{user.name}</td>
                <td className="border px-3 py-3">{user.email}</td>
                <td className="border px-3 py-3">{user.role==='admin' &&'admin'}
                {user.role==='instructor' && 'instructor'}
                {user.role!=='admin' && user.role!=='instructor'?
                'user':''
                }
                </td>
                <td className="border px-3 py-3">
                 
                    <button disabled={`${user.role==='admin' ?true:''}`}
                      onClick={() => handleAdmin(user)}
                      className=" btn-ghost bg-purple-500 btn text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
            
                </td>
               
                <td className="border px-3 py-3">

                  
                    <button disabled={`${user.role==='instructor'?true:''}`}
                      onClick={() => handleInstructor(user)}
                      className="btn-ghost bg-teal-700 btn text-white font-bold py-2 px-4 rounded"
                    >
                      <FaUserTag></FaUserTag>
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

export default ManageUser;
