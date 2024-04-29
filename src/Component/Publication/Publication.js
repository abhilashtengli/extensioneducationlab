import React, { useEffect } from "react";
import Header from "../Header";
import PublicationBody from "./PublicationBody";
import Footer from "../Footer/Footer";

const Publication = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Header />
      <PublicationBody/>
      <Footer />

    </>
  );
};

export default Publication;
