import React from 'react'

function Project({title, name, date}) {
    return (
        <div>
            <div className="card z-depth-0 project-summary ">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{title}</span>
                    <p>Posted by {name} </p>
                    <p className="grey-text">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default Project
