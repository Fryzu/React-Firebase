import React from 'react'
import PostSummary from './PostSummary';

const PostList = ({posts}) => {
    const postList = posts.length ? (
        posts.map((i) => {
            return (
                <PostSummary key={i.id} post={i} />
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