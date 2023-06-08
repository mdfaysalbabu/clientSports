import "./Extrasection.css";

const Extrasection = () => {
  return (
    <div className="// bg-gradient-to-r from-purple-300 to-re-600">
      <div className="flex flex-col md:flex-row m-10 ">
        <div className="w-full md:w-1/2  animate-pulse rounded-xl p-5">
          <img
            src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg"
            alt="Image"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        {/* <div className="text-center ml-10">
      <h1 className="text-4xl font-bold mb-4">
        <span className="animated-text">Sports Academy</span>
      </h1>
      
    </div> */}
        <div className="w-full md:w-1/2 text-green-700 py-12 px-8 hover:bg-gray-100 transition duration-300 rounded-xl ">
          <h1 className="text-4xl font-bold mb-4">
            <span className="animated-text">Sports Academy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to our Sports Academy, where champions are made! We offer
            professional coaching and training in various sports disciplines
            including football, basketball, tennis, and more. Our
            state-of-the-art facilities and experienced coaches ensure that our
            students receive the best training and guidance. Whether you are a
            beginner or an advanced athlete, we have programs suited for all
            skill levels. Join us today and take your sports skills to the next
            level!
          </p>
          <div className="text-center">
            <button className="bg-gradient-to-r from-teal-500 to-yellow-400 hover:from-teal-400 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extrasection;
// bg-gradient-to-r from-blue-500 to-purple-500
