import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = (props)  =>{

    let { id } = useParams();
    console.log(id);

    return (
        <div className="container section project-details" > 
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <span className="card-title">Project Title- {id} </span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quod tenetur ea distinctio iste maiores nostrum animi accusamus laborum. Velit rerum reprehenderit quas facilis ullam architecto a doloribus itaque fugiat.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Emmanuel</div>
                    <div>18 March 2023 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
