import React from "react";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "iklansatu.jpg",
    caption: "Slide 1",
  },
  {
    url: "iklandua.jpg",
    caption: "Slide 2",
  },
  {
    url: "iklantiga.jpg",
    caption: "Slide 3",
  },
  {
    url: "iklanempat.jpg",
    caption: "Slide 4",
  },
];


function SlidePic() {
  return (
    <div className="my-6  lg:mx-48 slide-container ">
      <Fade duration= {2000} arrows={false} pauseOnHover= {false} infinite={true} transitionDuration= {500} indicators={index => <div className="border-t-4 w-11 border-white mx-0.5 active:border-gray-600 hover:cursor-pointer z-10 -mt-11"><div className="hidden ">{index+1}</div></div>} scale={1.4}>
        {slideImages.map((slideImage, index) => (
          <>
            <div className="each-slide" key={index}>
              <img className="object-contain w-full d-block" src={slideImage.url} />
            </div>
          </>
        ))}
      </Fade>
    </div>
  );
}

export default SlidePic;
