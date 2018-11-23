import React from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {
    return (
        <div className="notifications">
            <div className="card shadow-sm">
                <div className="list-group">
                    <h5 className="list-group-item notifications-header">
                        Notifications
                    </h5>
                    <Link to="#" className="list-group-item list-group-item-action">
                        <b>@Jaxson Burns</b> Big elephant outside of the zoo<br/>
                        <span className="text-muted">Lorem ipsum dolor, sit amet consectetur...</span>
                    </Link>
                    <Link to="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <span className="mb-1"><b>@Jaxson Burns</b></span>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <span>Big elephant outside of the zoo</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Notifications;