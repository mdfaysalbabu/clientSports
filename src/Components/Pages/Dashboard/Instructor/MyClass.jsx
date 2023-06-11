import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Authprovider";

const MyClass = () => {
  const [classes,setClasses]=useState()
  const {user}=useContext(AuthContext);
  console.log(user?.email);
  useEffect(()=>{
    fetch(`http://localhost:4000/class/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      setClasses(data)
    })
  },[user?.email])
  return (
    <div>
     <div className="overflow-x-auto bg-pink-200 rounded-lg shadow-xl p-4  ms-5">
  <table className="table">
    {/* head */}
    <thead className="bg-pink-500 text-white">
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Seats</th>
        <th>Price</th>
        <th>Feedback</th>
        <th>Update</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
           classes?.map((item,index)=><tr className="border px-4 py-2 sm:w-auto"
           key={item._id}
           >
            <th >
            {index+1}
            </th>
            <td>
            
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              
             
            </td>
            <td>
              
              {item.name}
            </td>
            <td>{item.seats}</td>
            <td>{item.price}</td>
            <th>
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Feedback</button>
            </th>
            <th>
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">Update</button>
            </th>
          </tr>)
      }
      
      
    </tbody>
   
    
  </table>
</div>
    </div>
  );
};

export default MyClass;
