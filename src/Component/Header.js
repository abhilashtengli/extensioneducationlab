import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../Images/linkedin.webp";
import orcid from "../Images/ORCID.png";
import researchgate from "../Images/ResearchGate.png";
import { linkedinUrl } from "./Utils/Constants";
import { researchgateUrl } from "./Utils/Constants";
import { orcidUrl } from "./Utils/Constants";
import eelLogoxl from "../Images/eelLogoxl.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const words = ["Engage", "Learn", "Evolve"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`z-20 w-full  bg-teal-200 lg:bg-opacity-70 flex justify-between border-b border-teal-200 py-3 px-1 lg:px-10 items-center fixed`}
      >
        <div className="flex  items-center gap-x-4 md:gap-x-3 lg:gap-x-5">
          <Link to="/">
            <img
              alt="logo"
              className="w-16  border-red-500 md:w-16 animate-bottom-to-top rounded-full"
              src={eelLogoxl}
            />
          </Link>
          <div className=" text-green-900 border-red-500  hidden md:block">
            <h1 className=" tracking-wider animate-bottom-to-top text-lg font-semibold  pl-2  bg-opacity-30 rounded-sm p-1">
              ELe to
            </h1>
            <h1
              key={currentTagIndex}
              className={`h-fit  border-red-500  w-20 tracking-wider ml-16 pl-1 text-xl -mt-[2.15rem]  font-bold animate-bottom-to-top`}
            >
              {words[currentTagIndex]}
            </h1>
          </div>
          <div className=" text-green-900 border-red-500  block md:hidden w-[10.5rem] -ml-3  ">
            <h1 className=" tracking-wider animate-bottom-to-top text-lg font-semibold  pl-2 bg-opacity-30 rounded-lg p-1">
              ELe to
            </h1>
            <h1
              key={currentTagIndex}
              className={`h-fit  border-red-500  w-fit tracking-wider ml-16 px-2 text-xl -mt-[2.1rem]  font-semibold animate-bottom-to-top`}
            >
              {words[currentTagIndex]}
            </h1>
          </div>
        </div>

        {!menuOpen ? (
          <FontAwesomeIcon
            className=" lg:hidden w-5 h-8 text-black mr-3"
            icon={faBars}
            onClick={toggleMenu}
          />
        ) : (
          <FontAwesomeIcon
            className=" lg:hidden w-5 h-8 text-black mr-3"
            icon={faXmark}
            onClick={toggleMenu}
          />
        )}
        <ul className=" hidden font-semibold md:hidden lg:flex xl:flex justify-between  items-center text-xl animate-bottom-to-top gap-x-5  text-green-900 ">
          <li className=" hover:text-green-500">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li className=" hover:text-green-500">
            <Link to="/bio">Bio</Link>
          </li>
          <li className=" hover:text-green-500">
            <Link to="/research">Research</Link>
          </li>
          <li className=" hover:text-green-500">
            <Link to="/publication">Publication</Link>
          </li>

          <li className=" hover:text-green-500">
            <Link to="/resource">Resource</Link>
          </li>
          <li className=" hover:text-green-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to={linkedinUrl}>
              <img
                className="w-10  border-black"
                alt="linkedin"
                src={linkedin}
              />
            </Link>
          </li>
          <li>
            <Link to={orcidUrl}>
              <img
                className="w-8  border-black mr-0.5"
                alt="orcid"
                src={orcid}
              />
            </Link>
          </li>
          <li>
            <Link to={researchgateUrl}>
              <img
                className="w-8  border-black"
                alt="researchgate"
                src={researchgate}
              />
            </Link>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <div
          className={`h-screen w-screen fixed  flex flex-col justify-between items-center z-10  border-red-500  lg:hidden right-0 left-0 bg-white  transition duration-500 ease-in-out transform translate-x-0`}
        >
          <ul className=" animate-bottom-to-top border-black text-center text-4xl font-semibold mt-52">
            <li className="px-4 py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/bio">Bio</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/research">Research</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/publication">Publication</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/resource">Resource</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <ul className="flex mb-20 justify-between  items-center text-xl animate-left-to-right gap-x-10 ">
            <li>
              <Link to={linkedinUrl}>
                <img
                  className="w-10  border-black"
                  alt="linkedin"
                  src={linkedin}
                />
              </Link>
            </li>
            <li>
              <Link to={orcidUrl}>
                <img
                  className="w-8  border-black mr-0.5"
                  alt="orcid"
                  src={orcid}
                />
              </Link>
            </li>
            <li>
              <Link to={researchgateUrl}>
                <img
                  className="w-8  border-black"
                  alt="researchgate"
                  src={researchgate}
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
