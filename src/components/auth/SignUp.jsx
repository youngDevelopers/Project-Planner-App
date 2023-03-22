import React, {useState} from 'react'

function SignUp() {

    const [ email, setEmail ] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2 ] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log({
            "email": email,
            "password1": password1,
            "password2": password2,
            "firstName": firstName,
            "lastName": lastName
        })
    }

    const handleChange = (e) => {
        if(e.target.id === "email" ){
            setEmail(e.target.value)
        };
        if(e.target.id ==="password1"){
            setPassword1(e.target.value)
        }
        if(e.target.id ==="password2"){
            setPassword2(e.target.value)
        }
        if(e.target.id === "firstName"){
            setFirstName(e.target.value)
        }
        if(e.target.id === "lastName"){
            setLastName(e.target.value)
        }
    }

    return (
        <div className="container" >
            <form onSubmit={handleFormSubmit} className="white">
                <h5 className="grey-text text-darken-3 "> Sign Up </h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password1">Password</label>
                    <input type="password" id="password1" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password2"> Confirm Password</label>
                    <input type="password" id="password2" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form> -
            
        </div>
    )
}

export default SignUp
