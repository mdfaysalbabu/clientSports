import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";
import { useContext, useEffect, useState } from "react";

const Students = () => {
  const {user}=useContext(AuthContext)
  const [classes,setClasses]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:4000/carts/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setClasses(data)
    })
  },[user?.email])
  
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
            {
              classes.map(item=> <tr className="bg-white"
              key={item._id}
              >
              <td className="border px-4 py-2 sm:w-auto">{item.name}</td>
              <td className="border px-4 py-2 sm:w-auto">{item.instructorName}</td>
              <td className="border px-4 py-2 sm:w-auto">{item.seats}</td>
              <td className="border px-4 py-2 sm:w-auto">${item.price}</td>
              <td className="border px-4 py-2 sm:w-auto">
                <Link to="/dashboard/payment">
                  <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Proceed to Payment
                  </button>
                </Link>
              </td>
            </tr>)
            }
           
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
