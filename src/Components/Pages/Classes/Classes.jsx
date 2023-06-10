import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes,setClasses]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/class")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setClasses(data)
    })
  },[])
  return (
    <div>
       <h2 className="text-center font-bold text-4xl mt-5 mb-5">All Class Page</h2>
       <div>
        {
          classes.map(item=>(
            <ClassCard item={item} key={item._id}></ClassCard>
          ))
        }
       </div>
    </div>
  );
};

export default Classes;
