import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    const user = props.profile.firstName+" "+props.profile.lastName;

    return (
        <form className="form-inline">
            <a href="/"><button type="button" className="btn btn-link text-light">{user}</button></a>
            <a onClick={props.signOut}><button type="button" className="btn btn-light">Log out</button></a>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);