import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
I specialize in full-stack web development, with a keen focus on creating responsive and scalable web applications. My expertise includes:
Frontend Development: Proficient in HTML5, CSS3, and JavaScript, along with frameworks and libraries like React.js and Vue.js. I have a strong understanding of UI/UX design principles and can convert complex designs into pixel-perfect web pages.
Backend Development: Experienced in Node.js and frameworks such as Express for creating RESTful APIs. Familiar with using databases like MongoDB and PostgreSQL to store and manage data efficiently.
DevOps & Cloud Services: Skilled in deploying and managing applications on cloud platforms such as AWS, Azure, and Google Cloud Platform. Comfortable with Docker for containerization and Kubernetes for orchestration.
Tools & Best Practices: Adept at using version control with Git, continuous integration and deployment (CI/CD) with Jenkins or GitHub Actions, and following Agile methodologies for software development.
I am committed to leveraging the latest technologies to solve problems, enhance user experience, and drive business outcomes. My passion for technology drives me to continuously learn and adopt new tools and practices.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}