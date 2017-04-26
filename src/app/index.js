import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProductsList from './components/product-list'

class App extends Component {
    constructor(props){
        super(props);

        this.state = { users: [] };

        fetch('https://api.github.com/orgs/skilloio/members')
        .then(response => response.json())
        .then(users => this.setState({ users }));
    }

    render(){
        return <ProductsList users={this.state.users}/>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))