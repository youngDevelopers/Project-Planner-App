import React, {useState} from 'react'

function CreateProject() {

    const [ title, setTitle ] = useState('');
    const [ content , setContent ] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log({
            "title": title,
            "content": content,
        })
    }

    const handleChange = (e) => {
        if(e.target.id === "title" ){
            setTitle(e.target.value)
        };
        if(e.target.id ==="content"){
            setContent(e.target.value)
        }
    }

    return (
        <div className="container" >
            <form onSubmit={handleFormSubmit} className="white">
                <h5 className="grey-text text-darken-3 "> Sign In </h5>
                <div className="input-field">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Description</label>
                    <textarea className="materialize-textarea" id="content" onChange={handleChange} ></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                </div>
            </form> -
            
        </div>
    )
}

export default CreateProject
