import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class CreatePost extends Component {
    state = {
        title: "",
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />

        return (
            <div className="container create-post">
                <h4>Add new post:</h4><hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="title" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea onChange={this.handleChange} className="form-control" id="content" placeholder="Enter content" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch(createPost(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)