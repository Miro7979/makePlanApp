import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, eos cu zril ancillae ocurreret, inimicus posidonium eam te, id vivendo expetendis assueverit mea. An ferri delectus neglegentur sit. Eu dicat adipisci appellantur eos, id cum etiam augue theophrastus. Te nam accusata concludaturque, at meis ubique tamquam pri, per eu mucius labore.</p>
        </div>
        <div className="card-action gray lighten-4 gray-text">
          <div>Posted by Miro</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;