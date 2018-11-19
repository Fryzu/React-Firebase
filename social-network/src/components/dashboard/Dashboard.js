import React, {Component} from 'react';
import Notifications from './Notifications';
import PostsList from '../posts/PostsList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-12 col-md-8 mb-3">
                        <PostsList posts={this.props.posts} />
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps)(Dashboard);