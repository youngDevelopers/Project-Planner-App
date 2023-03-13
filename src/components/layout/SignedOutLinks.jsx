import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to='/'  >Sign Up</NavLink>
            </li>
            <li>
                <NavLink to='/'  >LogIn</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks
