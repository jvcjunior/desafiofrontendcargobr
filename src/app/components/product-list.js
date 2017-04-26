import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ProductListItem from './product-list-item'

const ProductsList = (props) => {
    const usersItems = props.users.map(user => {
        return <ProductListItem key={user.id} user={user}/>
    });
    return (
        <ul className="row list-group">
        {usersItems}
        </ul>
    );
}

export default ProductsList;