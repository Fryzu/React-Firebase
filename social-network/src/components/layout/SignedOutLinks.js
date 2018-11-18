import { NavLink } from 'react-router-dom';
import React from 'react'

const SignedOutLinks = () => {
    return (
        <form class="form-inline">
            <NavLink to="/"><button type="button" class="btn btn-link text-light">Sign in</button></NavLink>
            <NavLink to="/"><button type="button" class="btn btn-light">Log in</button></NavLink>
        </form>
    )
}

export default SignedOutLinks;