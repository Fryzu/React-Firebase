import React, { Component } from 'react';

class CommentsList extends Component {
    state = {

    }

    render() {
        return (
            <div className="container">
                <div className="list-group-item list-group-item-action shadow-sm mb-1">
                    <span>Comments:</span>
                </div>
                <div className="list-group-item list-group-item-action shadow-sm mb-1">
                    <div className="d-flex w-100 justify-content-between">
                        <span className="mb-1"><b>@Jackson Burns</b></span>
                        <small className="text-muted">3 seconds ago</small>
                    </div>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="list-group-item list-group-item-action shadow-sm mb-1">
                    <div className="d-flex w-100 justify-content-between">
                        <span className="mb-1"><b>@Jackson Burns</b></span>
                        <small className="text-muted">3 seconds ago</small>
                    </div>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
            </div>
        )
    }
}

export default CommentsList;