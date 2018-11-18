import { NavLink } from 'react-router-dom';
import React from 'react'

const SignedInLinks = () => {
    return (
        <form class="form-inline">
            <NavLink to="/"><button type="button" class="btn btn-link text-light">Jaxson Burns</button></NavLink>
            <NavLink to="/"><button type="button" class="btn btn-light">Log out</button></NavLink>
        </form>
    )
}

export default SignedInLinks;