import React from "react";
import DelayedComponent from "../DelayedComponent/DelayedComponent";

const BioBody = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col justify-end pb-16 pl-6 lg:pl-44 border-red-500 h-80">
          <h1 className="text-4xl animate-bottom-to-top">About me</h1>
          <p className="text-xl mt-4 animate-bottom-to-top">
            Cultivating knowledge and community through extension education
          </p>
        </div>
        <div className="bg-teal-50 py-12 lg:pl-44 lg:px-0 px-5 lg:pr-32 border-t border-teal-100">
          <DelayedComponent state="animate-bottom-to-top">
            <p className="  border-red-500 py-2 animate-bottom-to-top">
              <b>Mahesh B. Tengli </b> holds the position of Assistant Professor
              of Agricultural Extension at the School of Social Sciences,
              College of Post Graduate Studies in Agricultural Sciences, CAU(I),
              Barapani. Having joined the esteemed Central Agricultural
              University, Imphal in December 2019, Mahesh brings a wealth of
              academic experience to his role.
            </p>
            <p className="  border-red-500 py-2 animate-bottom-to-top">
              Mahesh completed his Bachelor’s degree in Agriculture at the
              College of Agriculture, University of Agricultural Sciences,
              Raichur, Karnataka, followed by his M.Sc. in Agricultural
              Extension at NMCA, Navsari Agricultural University, Navsari,
              Gujarat, and ICAR-National Dairy Research Institute, Karnal. His
              doctoral research, focused on the development of a dairy tourism
              model for the trans-Gangetic plains of India, was a culmination of
              his academic journey.
            </p>
            <p className=" border-red-500 py-2 animate-bottom-to-top">
              Throughout his career, Mahesh aims to contributed significantly to
              the field of extension education through various research articles
              and blogs. His research interests lie in modeling human behavior
              and applying these insights to address the challenges faced by
              farmers. In addition to his research endeavors, Mahesh is actively
              involved in teaching Masters and doctoral courses at the College
              of Post Graduate Studies in Agricultural Sciences, CAU(I),
              Barapani, Meghalaya INDIA.
            </p>
          </DelayedComponent>
          <div className=" border-black mt-5 ">
            <DelayedComponent state="animate-left-to-right">
              <h1 className="text-3xl animate-bottom-to-top">Teaching</h1>
            </DelayedComponent>
            <DelayedComponent state="animate-bottom-to-top ">
              <p className="mt-5 animate-bottom-to-top">
                Within the realm of academia, my expertise lies in instructing
                advanced courses tailored for Masters and Doctoral students,
                designed to equip them with the specialized skills and knowledge
                essential for success in their respective fields.
              </p>
              <p className="mt-5 animate-bottom-to-top">
                <b> Applied Behaviour Change:</b> One cornerstone of my teaching
                portfolio is Applied Behavior Change, where I delve into the
                intricacies of understanding and influencing human behavior to
                effect positive change, particularly within professional
                contexts. This encompasses a deep dive into theories and
                methodologies relevant to behavior change interventions,
                equipping students with the tools necessary to design and
                implement effective strategies in diverse settings.
              </p>
              <p className="mt-5 animate-bottom-to-top">
                <b>Entrepreneurship Development & Business Communication:</b> In
                these courses, I guide students through the multifaceted
                landscape of entrepreneurship, imparting both theoretical
                frameworks and practical insights aimed at nurturing
                entrepreneurial mindsets and fostering the development of viable
                business ventures. Moreover, emphasis is placed on honing
                communication skills essential for effective business
                interactions, encompassing areas such as professional writing,
                presentations, negotiations, and interpersonal communication,
                thereby empowering students to navigate the complexities of the
                business world with confidence and proficiency.
              </p>
              <p className="mt-5 animate-bottom-to-top">
                <b>Policy Engagement & Extension:</b> This course represents yet
                another focal point of my teaching endeavors, wherein I
                elucidate the processes and dynamics involved in policy
                formulation, implementation, and evaluation within the context
                of various industries and sectors. Moreover, I underscore the
                importance of extension services in bridging the gap between
                academia, government, industry, and communities, fostering
                collaboration and knowledge exchange for the betterment of
                society.
              </p>
              <p className="mt-5 animate-bottom-to-top">
                <b>Research Methodology:</b> Additionally, I offer comprehensive
                instruction in Research Methodology, equipping students with the
                requisite skills and techniques for conducting rigorous and
                systematic research across diverse disciplines. From research
                design and data collection to analysis and interpretation,
                students are guided through each stage of the research process,
                instilling in them a solid foundation for academic inquiry and
                scholarly pursuits.
              </p>
              <p className="mt-5 animate-bottom-to-top">
                <b> Technical Writing and Communication Skills:</b> Technical
                Writing and Communication Skills are areas of emphasis in my
                teaching repertoire, recognizing the critical role of clear and
                effective communication in academic and professional success.
                Through hands-on instruction and practical exercises, students
                are equipped with the tools and strategies necessary to
                communicate complex ideas and findings with precision, clarity,
                and impact, thereby enhancing their ability to disseminate
                knowledge and engage with diverse audiences.
              </p>
            </DelayedComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioBody;
