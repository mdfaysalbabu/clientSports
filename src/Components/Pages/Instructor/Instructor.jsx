const Instructor = () => {
  const instructorData = [
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://st2.depositphotos.com/1518767/11721/i/600/depositphotos_117213226-stock-photo-portrait-of-sports-teacher-using.jpg",
    },
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://st3.depositphotos.com/1518767/15512/i/600/depositphotos_155123606-stock-photo-coach-holding-stopwatch-in-park.jpg",
    },
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
    },
    {
      name: "babu",
      email: "babu@example.com",
      image:
        "https://img.freepik.com/free-photo/handsome-businessman-glasses-looking-satisfied-smiling-holding-hands-waist-standing_1258-26388.jpg",
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-br from-purple-300 via-pink-300 to-red-400 py-8 m-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Instructors</h2>
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
