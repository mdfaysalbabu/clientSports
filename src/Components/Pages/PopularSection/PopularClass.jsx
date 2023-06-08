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
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Popular Classes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem) => (
            <div
              className="bg-white shadow-md rounded-md p-6"
              key={classItem.id}
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={classItem.image}
                alt={classItem.title}
              />
              <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
              <p className="text-gray-600 mb-4">{classItem.description}</p>
              <button className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 transition duration-300">
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
