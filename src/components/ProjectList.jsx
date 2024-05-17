import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <ul className="space-y-2">
      {projects.map((project, index) => (
        <li key={index} className="p-4 bg-white shadow rounded">
          {project.name} - {project.technology}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
