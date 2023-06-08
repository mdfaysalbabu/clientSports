import React from "react";

const PopularClass = () => {
  const classes = [
    {
      id: 1,
      title: "Yoga Class",
      image: "yoga.jpg",
      description:
        "Join our yoga class to improve flexibility and reduce stress.",
    },
    {
      id: 2,
      title: "Zumba Fitness",
      image: "zumba.jpg",
      description:
        "Get fit and have fun with our energetic Zumba fitness sessions.",
    },
    {
      id: 3,
      title: "Zumba Fitness",
      image: "zumba.jpg",
      description:
        "Get fit and have fun with our energetic Zumba fitness sessions.",
    },
    // Add more class objects here...
  ];
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center mb-6">Popular Classes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem) => (
            <div
              className="bg-custom-color shadow-md rounded-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-400 to-indigo-500"
              key={classItem.id}
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={classItem.image}
                alt={classItem.title}
              />
              <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
              <p className="text-gray-600 mb-4">{classItem.description}</p>
              <button className="w-full text-xl text-white rounded-md py-2 px-4 bg-gradient-to-r from-teal-500 to-yellow-400 hover:from-teal-400 hover:to-yellow-500 ">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClass;
