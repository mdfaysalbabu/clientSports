import Extrasection from "../Extrasection/Extrasection";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white ">
        <div className="container mx-auto px-4">
          <div className="py-8 md:py-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-lg md:text-2xl">
              Discover amazing products and services
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://wheefootball.files.wordpress.com/2015/12/all-sports-banner.png"
            alt="Slider"
            className="object-cover md:w-full md:h-screen"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Our Products
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tristique urna et nibh aliquam, eu pellentesque massa finibus.
              </p>
              <a
                href="#"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Extrasection></Extrasection>
    </div>
  );
};

export default Banner;
