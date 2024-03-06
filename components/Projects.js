import React from "react";

import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What i,ve built</h2>
        <ProjectsItem title="property finder  "></ProjectsItem>
      </div>
    </div>
  );
};

export default Projects;
