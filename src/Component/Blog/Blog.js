import React, { useEffect } from "react";
import Header from "../Header";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Header />
    </>
  );
};

export default Blog;
