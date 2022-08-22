import React from "react";
import { Slide } from "react-slideshow-image";
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

// const properties = {
//   duration: 3000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   pauseOnHover: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   },
// };

function SlidePic() {
  return (
    <div className="my-6 md:mx-20 relative lg:mx-48 slide-container">
      <Slide
        duration={3000}
        arrows={false} indicators= {true} 
        onChange={(oldIndex, newIndex) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }}
      >
        {slideImages.map((slideImage, index) => (
          <>
          <div className="each-slide" key={index}>
            <img
              className="md:w-full md:h-72 h-48 w-full"
              src={slideImage.url}
            /> 
          </div>
            </>
        ))}
      </Slide>
    </div>
  );
}

export default SlidePic;
