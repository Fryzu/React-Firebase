import React, { Component } from 'react'

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
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <div class="card shadow-sm mb-3">
                    <div class="card-header">
                        Sign up:
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <input id="firstName" onChange={this.handleChange} type="text" class="form-control" placeholder="First name" />
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <input id="lastName" onChange={this.handleChange} type="text" class="form-control" placeholder="Last name" />
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

export default SignUp
