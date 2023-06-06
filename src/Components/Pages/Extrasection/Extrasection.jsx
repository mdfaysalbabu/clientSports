// import { Transition } from "@headlessui/react";

import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import AwesomeSlider from "react-awesome-slider";
import "./Extrasection.css";

const Extrasection = () => {
  const items = [
    {
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fdddba5da71d_template_image_1608375205.webp",
    },
    {
      title: "Feature 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "path-to-feature-2-image.jpg",
    },
    {
      title: "Feature 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "path-to-feature-3-image.jpg",
    },
    {
      title: "Feature 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "path-to-feature-4-image.jpg",
    },
  ];
  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Popular Section</h2>
          <div className="max-w-screen-lg mx-auto">
            <AwesomeSlider
              animation="scaleOutAnimation"
              className="aws-btn"
              mobileTouch={true}
              bullets={false}
            >
              {items.map((item, index) => (
                <div key={index} className="popular-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="popular-item__image"
                  />
                  <div className="popular-item__content">
                    <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </AwesomeSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extrasection;
