const Instructor = () => {
  const instructorData = [
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://thumbs.dreamstime.com/z/waiting-student-young-sports-instructor-stands-fitness-c-club-crossed-his-arms-handsome-man-beard-full-40829837.jpg",
    },
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://thumbs.dreamstime.com/z/waiting-student-young-sports-instructor-stands-fitness-c-club-crossed-his-arms-handsome-man-beard-full-40829837.jpg",
    },
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://thumbs.dreamstime.com/z/waiting-student-young-sports-instructor-stands-fitness-c-club-crossed-his-arms-handsome-man-beard-full-40829837.jpg",
    },
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://thumbs.dreamstime.com/z/waiting-student-young-sports-instructor-stands-fitness-c-club-crossed-his-arms-handsome-man-beard-full-40829837.jpg",
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {instructorData.map((instructor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <div className="relative overflow-hidden w-full h-40 rounded">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transform scale-125 transition-all duration-300 hover:scale-100"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
                  <p className="text-gray-600">{instructor.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
