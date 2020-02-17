import React from 'react';
import ProjectSummery from './projectSummery';

const ProjectList = ({projects}) => {
  return(
    <div className="project-list section">
    { projects && projects.map(project => {
      return (
        <ProjectSummery project={project} key={project.id} />
      )
    })}
    </div>
  )
}

export default ProjectList;