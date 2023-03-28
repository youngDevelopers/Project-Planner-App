import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

function ProjectList( {projects} ) {
    const navigate=useNavigate()
    return (
        <div className="project-list section" >
            { projects && projects.map( (project) => {
                return(
                    <div onClick={()=>navigate(`/project/?id=${project.id}`)} key={project.id}>
                        <ProjectSummary key={project.id} project={project} />
                    </div>
                )
            } ) }
        </div>
    )
}

export default ProjectList
