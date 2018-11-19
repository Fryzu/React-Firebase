import React from 'react';

const PostSummary = (props) => {
    return (
        <div className="card shadow-sm mb-3">
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <h6 className="mb-2 text-muted card-subtitle"><i>Jaxson Burns</i>, 16 Sept 2017</h6>
            </div>
        </div>
    )
}

export default PostSummary;