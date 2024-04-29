import React from "react";
import logo from "../../Images/MS_logo.png";
import { popularArticles } from "./Articles";
import { articles } from "./Articles";
import { Books } from "./Articles";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
const PublicationBody = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col justify-end pb-16 pl-44 border-red-500 h-80">
          <h1 className="text-4xl animate-bottom-to-top"> Articles</h1>
          <p className="text-xl mt-4 animate-bottom-to-top">
            Driving agricultural progress through insightful articles.
          </p>
        </div>
        <div className="bg-teal-50 py-12 pl-44 pr-32 border-t border-teal-100">
          <DelayedComponent state="animate-left-to-right">
            <h1 className="text-3xl text-teal-900 text-center font-semibold animate-bottom-to-top border border-teal-500 shadow-lg rounded-lg bg-white py-2">
              Popular Articles
            </h1>
          </DelayedComponent>
          <div className="py-5  border-black px-16 flex flex-wrap gap-x-10 gap-y-5 justify-center">
            {popularArticles.map((article) => (
              <DelayedComponent state="animate-bottom-to-top50 ">
                <section className="border flex  shadow-xl flex-col justify-between h-[27rem] bg-teal-50 border-gray-300 rounded-lg p-2 w-80">
                  <div>
                    <img
                      alt=""
                      className="w-80 rounded-tr-lg rounded-tl-lg"
                      src={logo}
                    />
                    <p>
                      <b className="text-teal-900">{article.topic}</b>
                      {article.explanation}
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
        <div className="bg-teal-50 py-12 pl-44 pr-32 ">
          <DelayedComponent state="animate-left-to-right">
            <h1 className="text-3xl text-teal-900 text-center font-semibold animate-bottom-to-top border border-teal-500 shadow-lg rounded-lg bg-white py-2">
              Articles
            </h1>
          </DelayedComponent>
          <div className="py-5  border-black px-16 flex flex-wrap gap-x-10 gap-y-5 justify-center">
            {articles.map((article) => (
              <DelayedComponent state="animate-bottom-to-top50 ">
                <section className="border animate-bottom-to-top shadow-xl flex flex-col justify-between h-[33rem] bg-teal-50 border-gray-300 rounded-lg p-2 w-80">
                  <div>
                    <img
                      alt=""
                      className="w-80 rounded-tr-lg rounded-tl-lg"
                      src={logo}
                    />
                    <p>
                      <b className="text-teal-900">{article.topic}</b>
                      {article.explanation}
                    </p>
                  </div>

                  <div className="flex ">
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
        <div className="bg-teal-50 py-12 pl-44 pr-32 ">
          <DelayedComponent state="animate-left-to-right">
            <h1 className="text-3xl text-teal-900 text-center shadow-lg font-semibold animate-bottom-to-top border border-teal-500  rounded-lg bg-white py-2">
              Books
            </h1>
          </DelayedComponent>
          <div className="py-5  border-black px-16 flex flex-wrap gap-x-10 gap-y-5 justify-center">
            {Books.map((book) => (
              <DelayedComponent state="animate-bottom-to-top50 ">
                <section className="border flex animate-bottom-to-top shadow-xl  flex-col  justify-between bg-teal-50 border-gray-300 rounded-lg p-2 w-80">
                  <div>
                    <img
                      alt=""
                      className="w-80 rounded-tr-lg rounded-tl-lg"
                      src={logo}
                    />
                    <p className="text-gray-700">
                      <b className="text-teal-900">{book.topic}</b>
                      {book.explanation}
                    </p>
                  </div>

                  <div className="flex animate-bottom-to-top">
                    <p className="mt-0.5 mr-1 font-bold">-</p>
                    <h2 className="text-xs mt-2 border-red-500 ">
                      {book.author}
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

export default PublicationBody;
