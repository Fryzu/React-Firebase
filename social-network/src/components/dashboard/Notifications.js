import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Notifications = (props) => {

    const {notifications} = props;

    return (
        <div className="notifications">
            <div className="card shadow-sm">
                <div className="list-group">
                    <h5 className="list-group-item notifications-header">
                        Notifications
                    </h5>
                        {notifications && notifications.map(item => {
                            return (
                                <Link to="#" className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                    <span className="mb-1"><b>@{item.user}</b></span>
                                    <small className="text-muted">{moment.unix(item.time.seconds).fromNow()}</small>
                                    </div>
                                    <span>{item.content}</span>
                                </Link> 
                            )
                        })}
                </div>  
            </div>
            <Link to="/createpost"><button type="button" className="btn btn-dark btn-block mt-2">Add new post</button></Link>
        </div>
    )
}

export default Notifications;