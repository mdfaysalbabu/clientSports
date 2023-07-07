import React from 'react';

const Achivesection = () => {
    const achievements = [
        {
          title: "Championship Titles",
          description: "20+ Championship Titles",
          imageUrl: "https://img.freepik.com/free-vector/golden-winners-cup_1284-18399.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
          color: "bg-yellow-500",
        },
        {
          title: "Records Broken",
          description: "50+ Records Broken",
          imageUrl: "https://img.freepik.com/premium-photo/composite-image-hand-holding-silver-medal-white-background_1134-28541.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
          color: "bg-blue-500",
        },
        {
          title: "National Representations",
          description: "100+ National Team Representations",
          imageUrl: "https://img.freepik.com/premium-vector/sport-concept-abstract-circle-with-icons-sports-accessories-equipment-winning-cup-among-set-icons-sport-vector-illustration-sports-background-design-logo-fitness-centers-gyms_153097-1564.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
          color: "bg-green-500",
        },
      ];
    return (
        <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-600 ">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 text-center text-white ${achievement.color}`}
              >
                <img
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-lg mb-4">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Achivesection;