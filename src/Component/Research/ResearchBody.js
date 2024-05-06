import React from "react";
import DelayedComponent from "../DelayedComponent/DelayedComponent";

const ResearchBody = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col justify-end lg:pb-5 pb-1 pl-6 lg:pl-44  border-red-500 text-teal-800 h-52">
          <h1 className="text-4xl animate-bottom-to-top">Research </h1>
          <p className="text-xl lg:mt-4 mt-1 animate-bottom-to-top">
            Bringing research to life through agricultural extension.
          </p>
        </div>
        <div className="bg-teal-50 py-12 lg:px-0 px-5 lg:pl-44 lg:pr-32  border-red-500  text-teal-800">
          <div>
            <DelayedComponent state="animate-bottom-to-top ">
              <p className="py-2 text-justify ">
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
              <p className="py-2 text-justify">
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
              <p className="py-2 text-justify">
                Dr. Tengli have been involved in collaborative projects like the
                "Rainbow Diet" campaign with ICAR-CTCRI in Tripura and a Millet
                promotion initiative with ICAR-IIMR Hyderabad in Tripura and
                Meghalaya.{" "}
              </p>
              <p className="py-2 text-justify">
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
          <div>
            <section></section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchBody;
