import React from 'react'

//This summary represens the detailed Summary Component of ant project
function ProjectSummary( {project} ) {
    return (
        <div>
            <div className="card z-depth-0 project-summary ">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by {project.author} </p>
                    <p className="grey-text"> {project.date} </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary
