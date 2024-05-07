import mbtengli from "../../Images/mbTengli.jpg";
import { Link } from "react-router-dom";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
import { bannerImages } from "../Utils/Constants";
import ImageScroller from "./ImageScroller";
const LandingPageBody = () => {
  return (
    <>
      <div className="border-red-500 w-[100%] px-2 lg:pt-24 pt-20  lg:flex">
        <div className="lg:w-4/6  border-black tracking-wider lg:px-5 ">
          <DelayedComponent state="animate-bottom-to-top50">
            <p className="border text-teal-800 border-teal-500 text-justify lg:mt-2 mt-5 p-5 rounded-lg bg-teal-50 shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.3)]">
              <b className="text-lg">
                Welcome to the Extension Education Lab (eLe)
              </b>{" "}
              , your virtual gateway to the world of extension education. At
              eLe, we provide a dynamic platform tailored for extension students
              and researchers, offering comprehensive resources to delve into
              the realms of extension education courses and research. Whether
              you're embarking on your academic journey or delving into
              groundbreaking research endeavors, eLe is your compass, guiding
              you through the intricate landscape of extension education with
              expertise and innovation. Join us in unlocking the boundless
              opportunities that await in the vibrant domain of extension
              education.
            </p>
          </DelayedComponent>
          <DelayedComponent state="animate-bottom-to-top">
            <ImageScroller images={bannerImages} />
          </DelayedComponent>
        </div>
        <div className=" lg:w-2/6  border-black  flex justify-center text-teal-800">
          <DelayedComponent state="animate-bottom-to-top">
            <div className="shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.4)] border border-teal-500 bg-teal-50 px-1 my-2 lg:mt-0 mt-5 rounded-lg w-fit p-2">
              <img
                className="lg:w-[21rem] w-80  rounded-tr-lg rounded-tl-lg"
                alt=""
                src={mbtengli}
              />
              <p className="lg:w-[21rem] w-80 tracking-wide mt-4 ml-1 text-justify">
                <b className="text-teal-800">Mahesh B. Tengli</b> holds the
                position of Assistant Professor of Agricultural Extension at the
                School of Social Sciences, College of Post Graduate Studies in
                Agricultural Sciences, CAU(I), Barapani
                <Link
                  to="/bio"
                  className="text-blue-700 ml-1 animate-bottom-to-top font-semibold"
                >
                  more..
                </Link>
              </p>
              <div className="mt-3 flex justify-center">
                <Link
                  to="/contact"
                  className=" animate-bottom-to-top px-4 py-1 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-transparent hover:border-teal-500  border-2  border-teal-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </DelayedComponent>
        </div>
      </div>
    </>
  );
};

export default LandingPageBody;
