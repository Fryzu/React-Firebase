import React, {Component} from 'react';
import Notifications from './Notifications'
import PostsList from '../posts/PostsList'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <PostsList />
                    </div>
                    <div className="col-12 col-md-4">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;