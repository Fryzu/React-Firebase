import React from 'react'
import PostSummary from './PostSummary';

const PostList = () => {
    return (
        <div className="posts-list">
            <PostSummary />
            <PostSummary />
            <PostSummary />
            <PostSummary />
        </div>
    )
}

export default PostList;