const Classes = () => {
  return (
    <div className="max-w-md mx-auto  rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-400 to-indigo-500 mt-10 mb-10">
      <img className="w-full h-56 object-cover object-center" src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg" alt="Class Image" />
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold mb-2">Class Name</h2>
        <p className="text-gray-300">Instructor: [Instructor Name]</p>
        <p className="text-gray-300">Instructor Email: [Instructor Email]</p>
        <div className="flex items-center text-gray-300 mb-2">
          <p className="mr-4">Available Seats: [Available Seats]</p>
          <p>Price: $[Price]</p>
        </div>
        <button className="block w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-yellow-400 hover:from-teal-400 hover:to-yellow-500  text-white font-semibold  hover:text-white transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Classes;
