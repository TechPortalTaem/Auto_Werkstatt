import React, {useState} from "react";
import ho1 from "../../assets/images/ho1.webp";
import ho2 from "../../assets/images/ho2.jpg";
import ho3 from "../../assets/images/ho3.jpg";
import { Carousel } from "react-bootstrap";

const BackgroundImageSlider = () => {
  const backgrounds = [ho1, ho2, ho3];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='background-slider'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={20000}>
        {backgrounds.map((background, idx) => (
          <Carousel.Item key={idx}>
            <img
              className='d-block w-100'
              src={background}
              alt={`Slide ${idx}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BackgroundImageSlider;
