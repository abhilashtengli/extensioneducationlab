import React from "react";
import { BlogData } from "./BlogData";
import DelayedComponent from "../DelayedComponent/DelayedComponent";

const BlogBody = () => {
  const Navigate = (link) => {
    window.open(link);
  };
  return (
    <>
      <div>
        <div className=" flex flex-col justify-end pb-5 h-52 pl-6 lg:pl-44  border-red-500  text-teal-800">
          <h1 className="text-4xl animate-bottom-to-top"> Blog</h1>
          <p className="text-xl lg:mt-4 mt-1 animate-bottom-to-top">
            Uncover wisdom in every word.
          </p>
        </div>
        <div className="bg-teal-50 py-12 lg:pl-44 lg:pr-32  border-t mx-auto  flex flex-col justify-center items-center border-teal-100">
          {BlogData.map((blog) => (
            <div>
              <DelayedComponent state="animate-bottom-to-top50 ">
                <div
                  className="border hidden border-teal-200 lg:flex justify-center shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.3)]
 rounded-lg bg-white  my-5 gap-x-10 h-[23rem] p-5"
                >
                  <div
                    onClick={() => Navigate(blog.link)}
                    className=" border-red-500 w-80 h-80 cursor-pointer"
                  >
                    <img alt="" className="w-80 h-80" src={blog.imgUrl} />
                  </div>
                  <div className="w-96 text-teal-800">
                    <h1
                      onClick={() => Navigate(blog.link)}
                      className="font-semibold text-xl cursor-pointer text-justify"
                    >
                      {blog.title}
                    </h1>
                    <p className="text-justify my-3">{blog.explanation}</p>
                    <ul>
                      {blog.date ? (
                        <li className=" my-3">Date : {blog.date}</li>
                      ) : (
                        ""
                      )}
                      <li className="text-xs text-end my-3">- {blog.author}</li>
                    </ul>
                  </div>
                </div>
              </DelayedComponent>
              <DelayedComponent state="animate-bottom-to-top50 ">
                <div className="border text-teal-800 px-4  border-teal-200 w-screen my-5 py-5 bg-white lg:hidden ">
                  <div className="flex justify-between">
                    <div onClick={() => Navigate(blog.link)} className="w-72">
                      <h1 className="text-2xl font-semibold">{blog.title}</h1>
                    </div>

                    <div
                      onClick={() => Navigate(blog.link)}
                      className=" border-black w-20 h-16"
                    >
                      <img alt="" className="w-20 h-16" src={blog.imgUrl} />
                    </div>
                  </div>
                  <div className="w-fit pr-2">
                    <p>{blog.explanation}</p>
                    <ul>
                      <li>Date : {blog.date}</li>
                      <li className="text-xs">- {blog.author}</li>
                    </ul>
                  </div>
                </div>
              </DelayedComponent>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogBody;
