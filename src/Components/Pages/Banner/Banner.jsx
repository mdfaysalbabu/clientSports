// import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import Extrasection from "../Extrasection/Extrasection";
import PopularSection from "../PopularSection/PopularSection";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import PopularClass from "../PopularSection/PopularClass";

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
      <div className="w-full">
        <AwesomeSlider
          className="aws-btn"
          bullets={false}
          organicArrows={true}
          selected={currentIndex}
          onTransitionEnd={({ currentIndex }) => setCurrentIndex(currentIndex)}
        >
          <div data-src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg">
            <div className="slider-overlay absolute left-20 lg:top-30 lg:left-96">
              <h2 className="text-4xl font-bold text-white">
                Welcome to Our Website
              </h2>
              <p className="text-lg text-white">
                Discover the best courses and instructors
              </p>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div data-src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg">
            <div className="slider-overlay absolute left-20 lg:top-30 lg:left-96">
              <h2 className="text-4xl font-bold text-white">
                Learn from Top Instructors
              </h2>
              <p className="text-lg text-white">
                Master new skills and expand your knowledge
              </p>
              <button className="btn-primary">Explore Courses</button>
            </div>
          </div>
          <div data-src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg">
            <div className="slider-overlay absolute left-20 lg:top-30 lg:left-96">
              <h2 className="text-4xl font-bold text-white">
                Join Our Community
              </h2>
              <p className="text-lg text-white">
                Connect with like-minded learners and experts
              </p>
              <button className="btn-primary">Join Now</button>
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
      <Extrasection></Extrasection>
    </div>
  );
};

export default Banner;
