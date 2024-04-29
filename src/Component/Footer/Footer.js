import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../../Images/linkedin.webp";
import orcid from "../../Images/ORCID.png";
import researchgate from "../../Images/ResearchGate.png";
import { linkedinUrl } from "../Utils/Constants";
import { researchgateUrl } from "../Utils/Constants";
import { orcidUrl } from "../Utils/Constants";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
const Footer = () => {
  return (
    <>
      <DelayedComponent state="animate-left-to-right">
        <ul className="flex justify-center items-center gap-x-5 py-5 bg-teal-50">
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
      </DelayedComponent>
    </>
  );
};

export default Footer;
