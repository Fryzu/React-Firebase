import { NavLink } from 'react-router-dom';
import React from 'react'

const SignedOutLinks = () => {
    return (
        <form className="form-inline">
            <NavLink to="/signin"><button type="button" className="btn btn-link text-light">Sign in</button></NavLink>
            <NavLink to="/signup"><button type="button" className="btn btn-light">Log in</button></NavLink>
        </form>
    )
}

export default SignedOutLinks;