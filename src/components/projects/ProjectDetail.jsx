import React, {useEffect} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {connect} from 'react-redux';
import { withFirestore} from 'react-redux-firebase';
import {compose} from 'redux';

const ProjectDetail = ({firestore})  =>{
    const [searchParams,setSearchParams]= useSearchParams()

    const mid = searchParams.get('id')

    useEffect(() => {
        firestore.get('projects')
    }, [])

    return (
        <div className="container section project-details" > 
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <span className="card-title">Project Title- {mid} </span>
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

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps
    const projects = state.firestore.data.projects;
    const project = projects && projects[id]; 
    return {
        project  : projects
    }
}


export default compose(
    withFirestore,
    connect(mapStateToProps)
  )(ProjectDetail);
