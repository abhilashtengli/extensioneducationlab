import React, { useEffect } from "react";
import Header from "../Header";
import BioBody from "./BioBody";
import Footer from "../Footer/Footer";

const Bio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Header />
      <BioBody />
      <Footer />
    </>
  );
};

export default Bio;
