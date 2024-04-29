import React, { useEffect, useState } from "react";
import mbtengli from "../../Images/mbTengli.jpg";
import { Link } from "react-router-dom";
import banner1 from "../../Images/banner1.jpg";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
const LandingPageBody = () => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const words = ["Support", "Enhance", "Empower"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative">
        <div className="bg-black  w-full h-screen bg-opacity-75">
          <img className="w-screen h-screen" alt="banner" src={banner1} />
        </div>
        <div className="absolute inset-0 text-white text-5xl">
          <div className=" border-red-500  h-fit  mt-44 ml-24 w-[35%] ">
            <h1 className=" tracking-wider animate-bottom-to-top  font-semibold bg-black bg-opacity-20 rounded-lg p-2">
              Extension Education Lab to
            </h1>
            <h1
              key={currentTagIndex}
              className={` h-fit border-red-500 w-fit tracking-wider ml-44 -mt-14 font-bold animate-bottom-to-top`}
            >
              {words[currentTagIndex]}
            </h1>
          </div>

          <p className="text-black  animate-bottom-to-top text-lg rounded-lg border border-rgray-100 w-1/2 ml-24 mt-8 bg-teal-50 p-2 bg-opacity-50">
            Welcome to the Extension Education Lab (eeL), your virtual gateway
            to the world of extension education. At eeL, we provide a dynamic
            platform tailored for extension students and researchers, offering
            comprehensive resources to delve into the realms of extension
            education courses and research. Whether you're embarking on your
            academic journey or delving into groundbreaking research endeavors,
            eeL is your compass, guiding you through the intricate landscape of
            extension education with expertise and innovation. Join us in
            unlocking the boundless opportunities that await in the vibrant
            domain of extension education.
          </p>
        </div>
      </div>
      <div className=" border-red-500 flex justify-center py-20 bg-teal-50">
        <DelayedComponent state="animate-left-to-right">
          <div className=" border border-teal-600 w-96 p-3 flex flex-col rounded-lg space-y-6  bg-white ">
            <p className="animate-bottom-to-top ">
              <b>Mahesh B. Tengli </b> holds the position of Assistant Professor
              of Agricultural Extension at the School of Social Sciences,
              College of Post Graduate Studies in Agricultural Sciences, CAU(I),
              Barapani. Having joined the esteemed Central Agricultural
              University, Imphal in December 2019, Mahesh brings a wealth of
              academic experience to his role.
            </p>
            <p className="animate-bottom-to-top ">
              Mahesh completed his Bachelor's degree in Agriculture at the
              College of Agriculture, University of Agricultural Sciences,
              Raichur, Karnataka, followed by his M.Sc. in Agricultural
              Extension at NMCA, Navsari Agricultural University, Navsari,
              Gujarat, and ICAR-National Dairy Research Institute, Karnal. His
              doctoral research, focused on the development of a dairy tourism
              model for the trans-Gangetic plains of India, was a culmination of
              his academic journey
              <Link
                to="/bio"
                className="text-blue-500 ml-2 animate-bottom-to-top  font-semibold"
              >
                more..
              </Link>
            </p>
            <div>
              <Link
                to="/contact"
                className="text-teal-600 animate-bottom-to-top hover:bg-teal-50  border-2 font-semibold border-teal-600 px-4 py-1 rounded-lg bg-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </DelayedComponent>
        <DelayedComponent state="animate-bottom-to-top50 ">
          <div className="border ml-2 border-slate-200 rounded-lg shadow-lg">
            <img
              alt="pic"
              className=" animate-bottom-to-top w-96 rounded-lg"
              src={mbtengli}
            />
          </div>
        </DelayedComponent>
      </div>
    </>
  );
};

export default LandingPageBody;
