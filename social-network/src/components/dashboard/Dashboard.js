import React, {Component} from 'react';
import Notifications from './Notifications';
import PostsList from '../posts/PostsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    
    render() {
        const { auth } = this.props;
        
        if (!auth.uid) return <Redirect to="/signin" />

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
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth
    }
}

//we need to also connect with the firestoreConnect so that the redux know when to update
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'} //links it with posts database so when it changes it will adapt the component
    ])
)(Dashboard);