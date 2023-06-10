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
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
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
           classes?.map((item,index)=><tr
           key={item._id}
           >
            <th>
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
              <button className="btn btn-ghost btn-xs">Feedback</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">Update</button>
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
