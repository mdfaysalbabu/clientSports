import { useEffect, useState } from "react";
const PopularSection = () => {

  const [instructor,setInstructor]=useState([]);
  useEffect(()=>{
    fetch('https://sports-academy-server-pi.vercel.app/users')
    .then(res=>res.json())
    .then(data=>{
      const allData=data.filter(item=>item.role==='instructor')
      const y=allData.slice(0,6)
      setInstructor(y);
    })
  },[])
  return (
    <section className=" py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-500">Popular Instructor</h2>
      <div className="  py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {instructor.map((instructor, index) => (
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
    </section>
  );
};

export default PopularSection;
