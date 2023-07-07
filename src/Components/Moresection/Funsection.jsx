import React from "react";

const Funsection = () => {
    const events = [
        {
          title: "Football Tournament",
          date: "July 15, 2023",
          location: "Sports Stadium",
          imageUrl: "https://img.freepik.com/free-vector/soccer-stadium_1284-22432.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
          color: "bg-green-600",
        },
        {
          title: "Swimming Championship",
          date: "August 5-6, 2023",
          location: "Aquatics Center",
          imageUrl: "https://img.freepik.com/free-photo/full-shot-athlete-swimming-pool_23-2149028360.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=sph",
          color: "bg-cyan-700",
        },
        {
          title: "Athletics Meet",
          date: "September 10, 2023",
          location: "Athletics Track",
          imageUrl: "https://img.freepik.com/premium-photo/sprinter-leaving-starting-blocks-running-track_8544-3.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=sph",
          color: "bg-purple-700",
        },
      ];
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600 ">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg text-white ${event.color}`}
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-200 mb-2">{event.date}</p>
              <p className="text-gray-200 mb-4">{event.location}</p>
              <button className="bg-gradient-to-r from-teal-500 to-orange-400 hover:from-teal-400 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Funsection;
