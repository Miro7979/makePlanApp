import React from 'react';

const ProjectSummery = ({project}) => {
  return (
    <div className="card z-depth-0 project-summery">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>Posted by Miro</p>
      <p className="grey-text">10 september, 2am</p>
    </div>
  </div>
  )
}

export default ProjectSummery;