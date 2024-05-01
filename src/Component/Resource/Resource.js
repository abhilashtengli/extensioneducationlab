import React, { useEffect } from "react";
import Header from "../Header";
import ResourceBody from "./ResourceBody";
import Footer from "../Footer/Footer";

const Resource = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Header />
      <ResourceBody/>
      <Footer/>

    </>
  );
};

export default Resource;
