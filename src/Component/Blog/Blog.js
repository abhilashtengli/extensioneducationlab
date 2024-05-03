import React, { useEffect } from "react";
import Header from "../Header";
import BlogBody from "./BlogBody";
import Footer from "../Footer/Footer"
const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Header />
      <BlogBody />
      <Footer/>
    </>
  );
};

export default Blog;
