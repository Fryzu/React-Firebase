import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import CommentsList from '../comments/CommentsList';

function PostDetails(props) {
    //const id = props.match.params.id;

    const { auth } = props;
    if (!auth.uid) return <Redirect to="/signin" />

    const post = props.post ? (
        <div className="container post-details">
            <div className="card shadow-sm mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.post.title}</h5>
                    <p>{props.post.content}</p>
                    <h6 className="mb-2 text-muted card-subtitle">
                        <i>{props.post.authorFirstName + " " + props.post.authorLastName}</i>
                        {", "+moment.unix(props.post.createdAt.seconds).format('LL')}
                        </h6>
                </div>
            </div>
        </div>
    ) : (
        <div className="container post-details">
            <div className="card shadow-sm mb-3">
                <div className="card-body">
                    <p>Loading content...</p>
                </div>   
            </div>
        </div>
    );

    return (
        <div>
            {post}
            <CommentsList />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null; 
    return {
        post: post,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(PostDetails)
