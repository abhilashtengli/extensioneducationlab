import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../Images/linkedin.webp";
import orcid from "../Images/ORCID.png";
import researchgate from "../Images/ResearchGate.png";
import { linkedinUrl } from "./Utils/Constants";
import { researchgateUrl } from "./Utils/Constants";
import { orcidUrl } from "./Utils/Constants";
import eelLogoxl from "../Images/eelLogoxl.png";
const Header = () => {
  return (
    <>
      <div
        className={`z-20 w-full  bg-teal-200 bg-opacity-70 flex justify-between border-b border-teal-200 py-3 px-10 items-center fixed`}
      >
        <Link to="/">
          <img
            alt="logo"
            className="w-16 animate-bottom-to-top rounded-full"
            src={eelLogoxl}
          />
        </Link>
        <ul className=" flex justify-between items-center text-xl animate-bottom-to-top gap-x-10  text-black ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li>
            <Link to="/research">Research</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
          <li>
            <Link to="/publication">Publication</Link>
          </li>
          <li>
            <Link to="/resource">Resource</Link>
          </li>
          <li>
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
    </>
  );
};

export default Header;
