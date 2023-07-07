// import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import Extrasection from "../Extrasection/Extrasection";
import PopularSection from "../PopularSection/PopularSection";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import PopularClass from "../PopularSection/PopularClass";
import Moreextra from "../../Moresection/Moreextra";
import Difsection from "../../Moresection/Difsection";
import Funsection from "../../Moresection/Funsection";
import Achivesection from "../../Moresection/Achivesection";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div className="w-full ">
        <AwesomeSlider
          className="aws-btn"
          bullets={false}
          organicArrows={true}
          selected={currentIndex}
          onTransitionEnd={({ currentIndex }) => setCurrentIndex(currentIndex)}
        >
          <div data-src="https://png.pngtree.com/background/20210711/original/pngtree-blue-sky-picture-image_1113901.jpg">
            <div className="slider-overlay absolute left-20 lg:top-30 lg:left-96">
              <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-red-500 to-teal-500  text-transparent  bg-clip-text">
                Welcome to Our Academy
              </h2>
              <p className="text-1xl font-bold text-center text-gradient bg-gradient-to-r from-orange-500 to-red-500  text-transparent  bg-clip-text">
                Discover The Best Courses and Instructors
              </p>
              <div className="text-center mt-5">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div data-src="https://media.umbraco.io/dwtc/00wmrjpv/academies_banner_v5.jpg">
            <div className="slider-overlay absolute left-20 lg:top-30 lg:left-96">
              <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-red-500 to-teal-500  text-transparent  bg-clip-text">
                Learn from Top Instructors
              </h2>
              <p className="text-1xl font-bold text-center text-gradient bg-gradient-to-r from-orange-500 to-red-500  text-transparent  bg-clip-text">
                Master new skills and expand your knowledge
              </p>
              <div className="text-center mt-5">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
          <div
            className=""
            data-src="https://img.freepik.com/premium-photo/close-up-boxing-gloves-basketball-football-tennis-golf-balls-discus_107420-15699.jpg?size=626&ext=jpg&ga=GA1.1.919388702.1686449806&semt=ais"
          >
            <div className="slider-overlay absolute left-20 lg:top-30 lg:left-96">
              <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-red-500 to-teal-500  text-transparent  bg-clip-text">
                Join Our Community
              </h2>
              <p className="text-1xl font-bold text-center text-gradient bg-gradient-to-r from-orange-500 to-red-500  text-transparent  bg-clip-text">
                Connect with like-minded learners and experts
              </p>
              <div className="text-center mt-5">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </AwesomeSlider>
      </div>
      <div>
        <PopularClass></PopularClass>
      </div>
      <div>
        <PopularSection></PopularSection>
      </div>
      <div>
        <Moreextra></Moreextra>
      </div>
      <div>
        <Difsection></Difsection>
      </div>
      <div>
        <Achivesection></Achivesection>
      </div>
      <div>
        <Funsection></Funsection>
      </div>
      <Extrasection></Extrasection>
    </div>
  );
};

export default Banner;
