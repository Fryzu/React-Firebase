import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />

        return (
            <div className="container">
                {authError ? <div className="alert alert-danger" role="alert">{authError}</div> : null }
                <div className="card shadow-sm mb-3">
                    <div className="card-header">
                        Sign up:
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <input id="firstName" onChange={this.handleChange} type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input id="lastName" onChange={this.handleChange} type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
