import React from "react";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
import { book } from "./data";

const ResourceBody = () => {
  const navigatingto = (link) => {
    window.open(link);
  };
  return (
    <>
      <div>
        <div className=" flex flex-col justify-end pb-16 pl-6 lg:pl-44 border-red-500 h-80">
          <h1 className="text-4xl animate-bottom-to-top">Resource</h1>
          <p className="text-xl mt-4 animate-bottom-to-top">
            Resources are the fuel of progress
          </p>
        </div>

        <div className="bg-teal-50 py-12 lg:pl-44 lg:pr-32 border-t border-teal-100">
          <div className="py-5  border-black px-1 flex flex-wrap gap-x-10 gap-y-5 justify-center">
            {book.map((article) => (
              <DelayedComponent state="animate-bottom-to-top50 ">
                <section
                  onClick={() => navigatingto(article?.link)}
                  className="border flex  shadow-xl flex-col cursor-pointer justify-between h-[33rem] bg-teal-50 border-gray-300 rounded-lg p-2 w-80"
                >
                  <div>
                    <img
                      alt=""
                      className="w-80 rounded-tr-lg rounded-tl-lg "
                      src={article.imgUrl}
                    />
                    <p>
                      <b className="text-teal-900">{article.title}</b> <br></br>
                      {/* {article.explanation} */}
                    </p>
                  </div>

                  <div className="flex animate-bottom-to-top">
                    <p className="mt-0.5 mr-1 font-bold">-</p>
                    <h2 className="text-xs mt-2 border-red-500 ">
                      {article.author}
                    </h2>
                  </div>
                </section>
              </DelayedComponent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceBody;
