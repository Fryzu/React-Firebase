import React from 'react'

function PostDetails(props) {
    //const id = props.match.params.id;
    return (
        <div className="container post-details">
            <div className="card shadow-sm mb-3">
                <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi non deserunt, totam ipsam aspernatur quo beatae asperiores, aut itaque fugiat illum inventore vitae, amet officiis fugit rerum? Earum, repudiandae!</p>
                    <h6 className="mb-2 text-muted card-subtitle"><i>Jaxson Burns</i>, 16 Sept 2017</h6>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
