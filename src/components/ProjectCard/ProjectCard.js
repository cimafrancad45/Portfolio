import React from "react";
import "./ProjectCard.css"
//project cards

const ProjectCard = props => (
<div className="container col s2 wrapper">
    <div className="card portfolio-items">
        <div className="card-title">
            <span>{props.projectName}</span>
        </div>
        <hr></hr>
        <div className="card-section">
            <a href={props.projectLink}>Github Link</a>
        </div>
    </div>
</div>
)

export default ProjectCard;