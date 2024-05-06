import React from "react";
import { popularArticles } from "./Articles";
import { articles } from "./Articles";
import { Books } from "./Articles";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
const PublicationBody = () => {
  const navigatingto = (link) => {
    window.open(link);
  };
  return (
    <>
      <div>
        <div className=" flex flex-col justify-end lg:pb-5 pb-3 pl-6 lg:pl-44 border-red-500 h-52 text-teal-800">
          <h1 className="text-4xl animate-bottom-to-top">Publications</h1>
          <p className="text-xl lg:mt-4 mt-1 animate-bottom-to-top">
            Driving agricultural progress through insightful articles.
          </p>
        </div>
        <div className="bg-teal-50 py-12 lg:pl-44 lg:pr-32 border-t border-teal-100">
          <DelayedComponent state="animate-left-to-right">
            <h1 className="text-3xl text-teal-900 text-center font-semibold animate-bottom-to-top border border-teal-300 shadow-lg rounded-lg bg-white py-2">
              Popular / Technical Articles
            </h1>
          </DelayedComponent>
          <div className="py-5  text-teal-800 border-black px-1 flex flex-wrap gap-x-10 gap-y-8 justify-center">
            {popularArticles.map((article) => (
              <DelayedComponent state="animate-bottom-to-top50 ">
                <section
                  onClick={() => navigatingto(article?.link)}
                  className="border shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.4)]
 flex   flex-col cursor-pointer justify-between h-[24rem] bg-white border-gray-300 rounded-lg p-2 w-80"
                >
                  <div>
                    <img
                      alt=""
                      className="w-80 rounded-tr-lg rounded-tl-lg h-52"
                      src={article.imgUrl}
                    />
                    <p className="text-justify">
                      <b className="text-teal-900">{article.topic}</b>
                      {article.explanation}
                    </p>
                  </div>

                  <div className="flex animate-bottom-to-top">
                    <p className="mt-0.5 mr-1 font-bold">-</p>
                    <h2 className="text-xs mt-2 border-red-500 text-justify">
                      {article.author}
                    </h2>
                  </div>
                </section>
              </DelayedComponent>
            ))}
          </div>
        </div>
        <div className="bg-teal-50 py-12 lg:pl-44 lg:pr-32 ">
          <DelayedComponent state="animate-left-to-right">
            <h1 className="text-3xl text-teal-900 text-center font-semibold animate-bottom-to-top border border-teal-300 shadow-lg rounded-lg bg-white py-2">
              Research Articles
            </h1>
          </DelayedComponent>
          <div className="py-5 text-teal-800 border-black px-1 flex flex-wrap gap-x-10 gap-y-8 justify-center">
            {articles.map((article) => (
              <DelayedComponent state="animate-bottom-to-top50 ">
                <section
                  onClick={() => navigatingto(article?.link)}
                  className="border animate-bottom-to-top shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.4)]
 flex flex-col justify-between h-[26rem] bg-white border-gray-300 rounded-lg p-2 w-80"
                >
                  <div>
                    <img
                      alt=""
                      className="w-80 rounded-tr-lg rounded-tl-lg h-52"
                      src={article.imgUrl}
                    />
                    <p className="text-justify">
                      <b className="text-teal-900">{article.topic}</b>
                      {article.explanation}
                    </p>
                  </div>

                  <div className="flex ">
                    <p className="mt-0.5 mr-1 font-bold">-</p>
                    <h2 className="text-xs mt-2 border-red-500 text-justify">
                      {article.author}
                    </h2>
                  </div>
                </section>
              </DelayedComponent>
            ))}
          </div>
        </div>
        <div className="bg-teal-50 py-12 lg:pl-44 lg:pr-32 ">
          <DelayedComponent state="animate-left-to-right">
            <h1 className="text-3xl text-teal-900 text-center shadow-lg font-semibold animate-bottom-to-top border border-teal-300  rounded-lg bg-white py-2">
              Books & Chapter's
            </h1>
          </DelayedComponent>
          <div className="py-5 text-teal-800  border-black px-1 flex flex-wrap gap-x-10 gap-y-8 justify-center">
            {Books.map((book) => (
              <DelayedComponent state="animate-bottom-to-top50 ">
                <section
                  onClick={() => navigatingto(book?.link)}
                  className="border flex animate-bottom-to-top shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.4)]
 cursor-pointer flex-col h-[30.5rem]  justify-between bg-white border-gray-300 rounded-lg p-2 w-80"
                >
                  <div>
                    <img
                      alt=""
                      className="w-80 rounded-tr-lg rounded-tl-lg h-52"
                      src={book?.imgUrl}
                    />
                    <p className="text-justify">
                      <b className="text-teal-900">{book.topic}</b>
                      {book.explanation}
                    </p>
                  </div>

                  <div className="flex animate-bottom-to-top">
                    <p className="mt-0.5 mr-1 font-bold">-</p>
                    <h2 className="text-xs mt-2 border-red-500 text-justify">
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
