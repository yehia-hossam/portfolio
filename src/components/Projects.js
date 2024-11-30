import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleQuestion, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

const Projects = () => {
  const [listProject] = useState([
    {
      name: "E-commerce Website",
      des: "The eCommerce website has more sections and consistent coordination with all screens.",
      mission: "Front-End",
      language: "HTML, CSS",
      images: '/cover-project1.PNG',
      link: 'https://yehia-hossam.github.io/E-Commerce/',
    },
    {
      name: "Car-Website",
      des: "The car website has more sections and consistent coordination with all screens",
      mission: "Front-end Developer",
      language: "HTML, CSS, JavaScript",
      images: '/cover-project2.PNG',
      link: 'https://yehia-hossam.github.io/Website-Car/',
    },
    {
      name: "Travel-Website",
      des: "The travel website has more sections and consistent coordination with all screens",
      mission: "Front-end",
      language: "HTML, CSS , JavaScript",
      images: '/cover-project3.PNG',
      link: 'https://yehia-hossam.github.io/Travel-Website/',
    },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        This is My Project
      </div>

      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
      These special projects are user interfaces that are compatible with all different screens and are of my own design
      </div>

      <div className="list">
        {listProject.map((value, key) => (
          <div key={key} className="item">
            <div className="images" ref={(el) => el && refDivs.current.push(el)}>
              <img src={value.images} alt={value.name} />
            </div>

            <div className="content" ref={(el) => el && refDivs.current.push(el)}>
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="de">{value.mission}</div>
                </div>
              </div>

              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="de">{value.language}</div>
                </div>
              </div>

              {/* Adding the project link */}
              {value.link && (
                <div className="link">
                  <a href={value.link} target="_blank" rel="noopener noreferrer">
                    Visit Project
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
