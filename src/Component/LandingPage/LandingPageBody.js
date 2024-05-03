import mbtengli from "../../Images/mbTengli.jpg";
import { Link } from "react-router-dom";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
// import { bannerImages } from "../Utils/Constants";
import ImageSlider from "../Functionalities/ImageSlider";
const LandingPageBody = () => {
  return (
    <>
      <div className="relative">
        <div className="">
          {/* <ImageSlider images={bannerImages} interval={2000} /> */}
        </div>
      </div>
      <div className="bg-teal-50 12 lg:pl-44 lg:pr-32 pt-5 px-1 lg:px-0 lg:pt-20">
        <DelayedComponent state="animate-bottom-to-top">
          <p className="text-black  animate-bottom-to-top text-lg rounded-lgy lg:text-center bg-teal-50 p-2 ">
            Welcome to the{" "}
            <b className="text-green-900"> Extension Edu Lab (eLe)</b> , your
            virtual gateway to the world of extension education. At eLe, we
            provide a dynamic platform tailored for extension students and
            researchers, offering comprehensive resources to delve into the
            realms of extension education courses and research. Whether you're
            embarking on your academic journey or delving into groundbreaking
            research endeavors, eLe is your compass, guiding you through the
            intricate landscape of extension education with expertise and
            innovation. Join us in unlocking the boundless opportunities that
            await in the vibrant domain of extension education.
          </p>
        </DelayedComponent>
      </div>
      <div className=" border-red-500 lg:px-0 px-5 flex flex-col-reverse items-center lg:flex-row lg:justify-center py-5 lg:py-20 bg-teal-50">
        <DelayedComponent state="animate-left-to-right">
          <div className=" border  lg:border-teal-600 lg:w-96 p-3 flex flex-col lg:mt-0 mt-2 lg:rounded-lg space-y-6  bg-white ">
            <p className="animate-bottom-to-top ">
              <b>Mahesh B. Tengli </b> holds the position of Assistant Professor
              of Agricultural Extension at the School of Social Sciences,
              College of Post Graduate Studies in Agricultural Sciences, CAU(I),
              Barapani. Having joined the esteemed Central Agricultural
              University, Imphal in December 2019, Mahesh brings a wealth of
              academic experience to his role.
              <Link
                to="/bio"
                className="text-blue-700 ml-2 animate-bottom-to-top md:hidden font-semibold"
              >
                more..
              </Link>
            </p>
            <p className="animate-bottom-to-top hidden md:block">
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
                className="text-blue-700 ml-2 animate-bottom-to-top  hover:text-blue-400  font-semibold"
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
          <div className="border lg:ml-2 border-slate-200 rounded-lg shadow-lg">
            <img
              alt="pic"
              className=" animate-bottom-to-top w-96 lg:h-full h-[27rem] rounded-lg"
              src={mbtengli}
            />
          </div>
        </DelayedComponent>
      </div>
    </>
  );
};

export default LandingPageBody;
