import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const ProductListItem = ({user}) => {
     return (
        // <li classNameName="list-group-item">
        //     <div className="video-list media">
        //         <div className="media-left">
        //             <img className="media-object" />
        //         </div>

        //         <div className="media-body">
        //             <div className="media-heading">

        //             </div>
        //         </div>
        //     </div>
        // </li>
         <div className="item  col-xs-4 col-lg-4 grid-group-item">
            <div className="thumbnail">
                <img className="group list-group-image img-thumbnail" src={user.avatar_url} alt="" />
                <div className="caption">
                    <h4 className="group inner list-group-item-heading">
                        {user.login}
                    </h4>
                    <p className="group inner list-group-item-text">
                        Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <p className="lead">
                                $21.000</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductListItem;