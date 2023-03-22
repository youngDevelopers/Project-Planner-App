import React, {useState} from 'react'

function SignIn() {

    const [ email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log({
            "email": email,
            "password": password,
        })
    }

    const handleChange = (e) => {
        if(e.target.id === "email" ){
            setEmail(e.target.value)
        };
        if(e.target.id ==="password"){
            setPassword(e.target.value)
        }
    }

    return (
        <div className="container" >
            <form onSubmit={handleFormSubmit} className="white">
                <h5 className="grey-text text-darken-3 "> Sign In </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form> -
            
        </div>
    )
}

export default SignIn
