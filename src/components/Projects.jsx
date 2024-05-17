import React, { useState } from 'react';
import ProjectList from './ProjectList';

const Projects = () => {
  const [filter, setFilter] = useState('');

  const projects = [
    { name: 'Project 1', technology: 'C#' },
    { name: 'Project 2', technology: 'Java' },
    { name: 'Project 3', technology: 'Node.js' },
    // Add more projects here
  ];

  const filteredProjects = projects.filter(project =>
    project.technology.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <input
        type="text"
        placeholder="Filter by technology"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default Projects;
