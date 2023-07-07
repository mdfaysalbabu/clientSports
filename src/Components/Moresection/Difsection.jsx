import React from "react";

const Difsection = () => {
  const programs = [
    {
      title: "Youth Soccer Program",
      description:
        "Join our youth soccer program and develop your skills in a fun and competitive environment.",
      imageUrl: "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=sph",
    },
    {
      title: "Basketball Training Camp",
      description:
        "Take your basketball game to the next level with  intensive training camp  by professional coaches.",
      imageUrl: "https://img.freepik.com/premium-photo/basketball-player-holding-ball-while-standing-with-thumbs-up_8595-26696.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
    },
    {
      title: "Tennis Clinics",
      description:
        "Learn the fundamentals of tennis or refine your technique with our specialized tennis clinics.",
      imageUrl: "https://img.freepik.com/free-photo/tennis-paddles-balls-arrangement_23-2149434236.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-purple-600  font-bold text-center mb-8">
          Featured Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-purple-300 rounded-lg shadow-lg">
              <img
                src={program.imageUrl}
                alt={program.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <button className="bg-teal-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Difsection;
