import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "iklansatu.jpg",
  },
  {
    url: "iklandua.jpg",
  },
  {
    url: "iklantiga.jpg",
  },
  {
    url: "iklanempat.jpg",
  },
];

function SlidePic() {
  return (
    <div className="my-6 md:mx-20 relative lg:mx-48">
      <Slide arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img
              className="md:w-full md:h-72 h-48 w-full"
              src={slideImage.url}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default SlidePic;
