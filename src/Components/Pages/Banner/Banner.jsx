import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";


const Banner = () => {
  return (
    <div>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg" />
        <div data-src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg" />
        <div data-src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg" />
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
