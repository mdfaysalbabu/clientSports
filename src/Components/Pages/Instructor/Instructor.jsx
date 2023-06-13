import { useEffect, useState } from "react";

const Instructor = () => {
 

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(res=>res.json())
    .then(data=>{
      const allData=data.filter(item=>item.role==='instructor')
      setUsers(allData);
    })
  },[])

  // console.log(users);

  return (
    <div>
      <div className="bg-gradient-to-br from-purple-300 via-pink-300 to-red-400 py-8 m-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold  mb-4 text-center text-purple-600">Our Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users?.map((instructor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <div className="relative overflow-hidden w-full h-40 rounded">
                  <img
                    src={instructor.photoUrl}
                    alt={instructor.name}
                    className="w-full h-full object-cover transform scale-125 transition-all duration-300 hover:scale-100"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
                  <p className="text-gray-600">{instructor.email}</p>
                </div>
                <button className="btn btn-success mt-2 ">Contact</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
