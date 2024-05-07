import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// npm install react-slick slick-carousel

const ImageScroller = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust this value for slide transition speed
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous scrolling
    cssEase: "linear", // Set cssEase to linear for smooth continuous scrolling
    pauseOnHover: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="lg:mx-auto lg:max-w-7xl  px-4 lg:px-2 border-black">
        <div className="mb-1 mt-8 ">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div className="lg:px-5 px-2 py-2 border-black" key={index}>
                <div
                  className="p-2 rounded-lg shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.2)]
 bg-teal-50 border w-fit border-teal-300  duration-500"
                >
                  <img
                    className=" h-72 lg:w-[26.5rem] w-[20rem] rounded-tl-lg rounded-tr-lg"
                    src={image.img}
                    alt={`Faculty ${index + 1}`}
                  />
                  <h1 className="text-center font-semibold mt-1 text-teal-800">
                    {image.occassion}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
