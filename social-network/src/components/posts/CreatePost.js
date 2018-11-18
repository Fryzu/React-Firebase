import React, { Component } from 'react'

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
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <h4>Add new post:</h4><hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="title" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label for="content">Content</label>
                        <textarea onChange={this.handleChange} className="form-control" id="content" placeholder="Enter content" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePost