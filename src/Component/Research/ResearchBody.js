import React from "react";
import DelayedComponent from "../DelayedComponent/DelayedComponent";
import { ResearchScholars } from "./ResearchData";
import Accordion from "../Utils/Accordion";

const ResearchBody = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col justify-end lg:pb-5 pb-3 pl-6 lg:pl-44  border-red-500 text-teal-800 h-52">
          <h1 className="text-4xl animate-bottom-to-top">Research </h1>
          <p className="text-xl lg:mt-4 mt-1 animate-bottom-to-top">
            Bringing research to life through agricultural extension.
          </p>
        </div>
        <div className="bg-teal-50  py-12 lg:flex lg:px-10 px-5 justify-between   border-black text-teal-800">
          <div className=" border-red-500 lg:w-[70%]  lg:px-20">
            <DelayedComponent state="animate-bottom-to-top ">
              <p className="pb-2 text-justify  ">
                Dr. Tengli’s extension research pursuits, he delves into a
                diverse array of fields, reflecting his passion for
                interdisciplinary investigations. His primary research interests
                lie at the intersection of agriculture and nutrition, with a
                focus on enhancing agricultural practices to promote
                nutrition-sensitive outcomes. This entails not only optimizing
                crop production but also understanding the behavioural dynamics
                that underpin food choices and consumption patterns.
                Furthermore, he is deeply intrigued by the intricacies of
                entrepreneurship, particularly within the agricultural sector,
                where innovation and enterprise play pivotal roles in driving
                sustainable development.{" "}
              </p>
              <p className="py-2 text-justify ">
                In his investigations, Dr. Tengli employ sophisticated behavior
                modelling techniques to elucidate the decision-making processes
                of entrepreneurs and identify factors that influence their
                intentions and actions. Moreover, Dr. Tengli is captivated by
                the realm of psychometrics, employing quantitative methods to
                measure psychological constructs such as attitudes, beliefs, and
                motivations, particularly in the context of agricultural
                entrepreneurship and rural development. Lastly, his research
                extends to the burgeoning domain of agro-tourism, where he
                endeavours to develop novel models that harness the potential of
                agricultural landscapes to foster tourism while promoting
                environmental sustainability and community development.
              </p>
              <p className="py-2 text-justify ">
                Dr. Tengli have been involved in collaborative projects like the
                "Rainbow Diet" campaign with ICAR-CTCRI in Tripura and a Millet
                promotion initiative with ICAR-IIMR Hyderabad in Tripura and
                Meghalaya.{" "}
              </p>
              <p className="py-2 text-justify ">
                Currently, Dr. Tengli’s academic endeavors are multifaceted,
                encompassing investigations into the concerns of kiwi growers in
                Arunachal Pradesh, the entrepreneurial aspirations of students
                at Central Agricultural University, and the development of an
                Agro-Eco-Tourism framework tailored for the unique landscape of
                Meghalaya. Through these endeavors, Dr. Tengli aim to contribute
                meaningfully to the advancement of knowledge and the promotion
                of sustainable practices in agriculture and rural development.
              </p>
            </DelayedComponent>
          </div>
          <div className="flex flex-col lg:w-[30%]  gap-y-5">
            <h1 className="text-lg text-teal-900 text-center font-semibold animate-bottom-to-top border border-teal-100 shadow-[rgba(0,_0,_0,_0.1)_0px_2px_5px] rounded-sm bg-white py-2">
              Scholar Sphere
            </h1>
            {ResearchScholars.map((scholar) => (
              <DelayedComponent state="animate-bottom-to-top ">
                <div className="border h-fit bg-white pb-5  shadow-[rgba(0,_0,_0,0.1)_0px_2px_5px] rounded-sm border-teal-100 ">
                  <div className=" flex justify-between items-start px-2 py-2">
                    <div className="w-[30%] p-3 ">
                      <img
                        alt=""
                        className=" border border-gray-400 rounded-sm"
                        src={scholar.imgUrl}
                      />
                    </div>
                    <div className="w-[70%] mt-1.5">
                      <h1 className="uppercase font-semibold">
                        {scholar.name}
                      </h1>
                      <h1 className="font-semibold">{scholar.degree}</h1>
                      <p className="justify-center">
                        <b className="font-semibold text-justify">
                          Research interest :
                        </b>
                        {scholar.ResearchInterest}
                      </p>
                    </div>
                  </div>
                  <div className=" border-red-500 px-5">
                    <Accordion title={"Research Aim"} answer={scholar.About} />
                  </div>
                </div>
              </DelayedComponent>
            ))}
          </div>
          {/* <div className=" border-black lg:mt-12 lg:hidden mt-5">
            <DelayedComponent state="animate-bottom-to-top ">
              <h1 className="text-3xl text-teal-900 text-center font-semibold animate-bottom-to-top border border-teal-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-sm bg-white py-2">
                Research Scholar's
              </h1>
            </DelayedComponent>
            {ResearchScholars.map((scholar) => (
              <DelayedComponent state="animate-bottom-to-top ">
                <section className="lg:flex  justify-between lg:my-5 my-6 lg:py-1 py-3 px-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border border-teal-200 rounded-sm bg-white">
                  <div className="flex pt-1">
                    <div className="border-red-500 lg:h-fit  lg:mt-0  p-2 lg:p-4  w-[30%] lg:w-[15%]">
                      <img
                        alt=""
                        className="w-fit border border-gray-400 rounded-sm"
                        src={scholar.imgUrl}
                      />
                    </div>
                    <div className="border-red-500 w-[70%] lg:w-[85%] lg:px-5 pr-1   lg:py-2">
                      <h1 className="font-semibold flex">
                        <h2 className="uppercase ">{scholar.name}</h2>
                      </h1>
                      <h1 className="font-semibold">{scholar.degree}</h1>
                      <p className="">
                        <b className="font-semibold text-justify">
                          Research interest :
                        </b>
                        {scholar.ResearchInterest}
                      </p>
                      <div className="text-justify mt-1 lg:block hidden">
                        {scholar.About.map((a) => (
                          <p>• {a}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-justify lg:hidden px-2.5">
                    {scholar.About.map((a) => (
                      <p>• {a}</p>
                    ))}
                  </div>
                </section>
              </DelayedComponent>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ResearchBody;
