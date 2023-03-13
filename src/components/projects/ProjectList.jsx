import React from 'react'
import Project from './Project'

function ProjectList() {
    return (
        <div className="project-list section" >
            <Project title='Project 1' name='Emmanuel' date='17 March 2023' />
            <Project title='Project 1'  name='Samson' date='21 March 2023' />
            <Project title='Project 1'  name='Kundai' date='24 March 2023' />
        </div>
    )
}

export default ProjectList
