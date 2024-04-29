import React, { useEffect } from "react";
import Header from "../Header";
import LandingPageBody from "./LandingPageBody";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <Header />
      <LandingPageBody />
      <Footer/>

    </div>
  );
};

export default LandingPage;
