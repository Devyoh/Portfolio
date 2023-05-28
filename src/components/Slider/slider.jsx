import "./slider.css";
import ArrowRight from "../../assets/Others/chevron_carousel_right.png";
import ArrowLeft from "../../assets/Others/chevron_carousel_left.png";
import { useState } from "react";

export default function Slider({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="relative flex w-full m-auto h-2/3 rounded-lg bg-center bg-cover"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            className="absolute top-1/3 h-1/6 translate-y-1/2 cursor-pointer right-10"
            src={ArrowRight}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="absolute top-1/3 h-1/6 translate-y-1/2 cursor-pointer left-10 "
            src={ArrowLeft}
            alt="show previous slider"
            onClick={prevSlide}
          />
          <p className="absolute bottom-6 left-1/2 translate-x-1/2 font-semibold text-white">
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </section>
  );
}
