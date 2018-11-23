import React from 'react';
import moment from 'moment';

const PostSummary = (props) => {
    const authorName = props.post.authorFirstName+" "+props.post.authorLastName;
    const date = moment.unix(props.post.createdAt.seconds).fromNow(); // ex 7 years ago

    return (
        <div className="card shadow-sm mb-3">
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <h6 className="mb-2 text-muted card-subtitle"><i>{authorName}</i>, {date}</h6>
            </div>
        </div>
    )
}

export default PostSummary;