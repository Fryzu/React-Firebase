import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'; // for auth

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-bottom" alt="logo" />
                    <span className="d-none d-md-inline">SocialNetworkSite.com</span>
                </Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);