import React, {Component} from 'react';
import Notifications from './Notifications';
import PostsList from '../posts/PostsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    
    render() {
        const { auth, notifications } = this.props;
        
        if (!auth.uid) return <Redirect to="/signin" />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-12 col-md-8 mb-3">
                        <PostsList posts={this.props.posts} />
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

//we need to also connect with the firestoreConnect so that the redux know when to update
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts', orderBy: ['createdAt', 'desc']}, //links it with posts database so when it changes it will adapt the component
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']} // so it reloads when new notifications
    ])
)(Dashboard);