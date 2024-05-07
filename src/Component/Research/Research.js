import React, { useEffect } from "react";
import Header from "../Header";
import ResearchBody from "./ResearchBody";
import Footer from "../Footer/Footer";

const Research = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Header />
      <ResearchBody />
      <Footer />
    </>
  );
};

export default Research;
