import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/Authprovider";


const ClassCard = ({item}) => {
  const {user}=useContext(AuthContext)
    const{name,image,instructorName,instructorEmail,seats,price}=item;
    const handleAddtoCart=()=>{
      const orderDetails={name:item.name,email:user.email,instructorName:item.instructorName,seats:item.seats,price:item.price}
      fetch('http://localhost:4000/carts',{
         method:"POST",
         headers:{
          'content-type':'application/json'
         },
        body:JSON.stringify(orderDetails)
      })
      .then(res=>res.json())
      .then(info=>{
        if(info.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'successfully add to cart',
          showConfirmButton: false,
          timer: 1500
        })
      }
      })

    }
  return (
    <div>
      <div className="max-w-md mx-auto  rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-400 to-indigo-500 mt-10 mb-10">
        <img
          className="w-full h-56 object-cover object-center"
          src={image}
          alt="Class Image"
        />
        <div className="p-4 flex flex-col items-center">
          <h2 className="text-yellow-500 text-2xl font-bold mb-1">Class Name : {name}</h2>
          <p className="text-yellow-500 text-xl font-bold">Instructor: {instructorName}</p>
          <p className="text-yellow-500 text-xl font-bold">Instructor Email: {instructorEmail}</p>
          <div className="flex items-center text-yellow-500 text-xl font-bold mb-2">
            <p className="mr-4">Available Seats: {seats}</p>
            <p>Price: ${price}</p>
          </div>
          <button onClick={()=>handleAddtoCart(item)} className="block w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-yellow-400 hover:from-teal-400 hover:to-yellow-500  text-white font-semibold  hover:text-white transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
