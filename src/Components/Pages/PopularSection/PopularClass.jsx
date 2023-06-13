import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const PopularClass = () => {
  const [sortClass,setSortClass]=useState([]);
  const [classes,setClasses]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:4000/class/${false}`)
    .then(res=>res.json())
    .then(data=>{
    const myData=data.slice(0,6);
      setClasses(myData);
    })
  },[])
  useEffect(()=>{
    const sortData=[...classes].sort((x,y)=>y.enrolledStudents-x.enrolledStudents)
    setSortClass(sortData)
  },[classes])
  return (
    <Fade direction="left">
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold text-center mb-6 text-violet-500">
            Popular Classes
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortClass.map((classItem) => (
              <div
                className="bg-custom-color shadow-md rounded-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-400 to-indigo-500"
                key={classItem.id}
              >
                <img
                  className="w-full h-48 object-cover rounded-md mb-4"
                  src={classItem.image}
                  alt={classItem.title}
                />
                <h3 className="text-yellow-500 text-xl font-bold">
                Class Name : {classItem.name}
                </h3>
                <p className="text-yellow-500 text-xl font-bold">Instructor: {classItem.instructorName}</p>
                <p className="text-yellow-500 text-xl font-bold">Available Seats: {classItem.seats}</p>
                <p className="text-yellow-500 text-xl font-bold">Price: ${classItem.price}</p>
                <p className="text-yellow-500 text-xl font-bold">Enrolled: {classItem.enrolledStudents}</p>
                <button className="w-full text-xl text-white rounded-md py-2 px-4 bg-gradient-to-r from-teal-500 to-yellow-400 hover:from-teal-400 hover:to-yellow-500 mt-2">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default PopularClass;
