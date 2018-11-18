import { Link } from 'react-router-dom';
import React from 'react'
import logo from './logo.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link class="navbar-brand" to="/">
                    <img src={logo} width="30" height="30" class="d-inline-block align-bottom" alt="logo" />
                    SocialNetworkSite.com
            </Link>
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;