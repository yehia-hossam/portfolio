import React, { useState,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faBootstrap, faTailwind, faJs } from "@fortawesome/free-brands-svg-icons";
import {fa} from '@fortawesome/free-solid-svg-icons';
import CustomHook from "./CustomHook";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "HTML",
     // des: "I build web pages Developing the site structure and changing all elements",

      icon: faHtml5,
    },
    {
      name: "CSS",
     // des: "I design and modify it and create an attractive and consistent design, responsive design with all devices, and create animation for the website.",

      icon: faCss3,
    },
    {
      name: "JavaScript",
      //des: "I create effects and interactions for web pages. Interactions mean everything that is done or performed at the browser level without the need to reload the page. Storing information in matrices and redesigning it responsively",

      icon: faJs,
    },
    {
      name: "ReactJs",
      //des: "Building small components for each part of the front-end of the application and then putting those components together to make complex user interfaces. When the user interacts with the application, only the part of the page whose content has changed is updated instead of updating all parts of the page after each change.",

      icon: faReact,
    },
    {
      name: "BootStrap",
     // des: "numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
      icon: faBootstrap,
    },
    {
      name: "Tailwind",
     // des: "numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
      icon: faCss3,
    },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab,refDivs)
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el&& refDivs.current.push
        (el)}>
          This is my skills
          </div>

      <div className="des" ref={(el) => el&& refDivs.current.push

      (el)}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has
      </div>

      <div className="list" ref={(el) => el&& refDivs.current.push
       (el)}>
        {listSkills.map((value, key) => (
          <div key={key} className="item">
            <FontAwesomeIcon icon={value.icon} size="2x" />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
