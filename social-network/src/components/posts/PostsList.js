import React from 'react'
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const PostList = ({posts}) => {
    const postList = (posts !== undefined) ? (
        posts.map((i) => {
            return (
                <Link key={i.id} className="post-list-item" to={"/post/"+i.id+"/"}><PostSummary post={i} /></Link>
            )
        })
    ) : (
        <div>
            <div className="card shadow-sm">
                <div className="card-body">
                    No posts to show...
                </div>
            </div>
        </div>
    );
    return (
        <div className="posts-list">
            {postList}
        </div>
    )
}

export default PostList;