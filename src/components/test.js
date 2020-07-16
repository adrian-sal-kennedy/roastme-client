import React, { Component} from 'react';

export default class exerciseList extends Component {


    componentDidMount = () => {
        fetch('https://roastme-recipes.herokuapp.com/test')
        .then(response => response.json())
        .then(data => this.setState({data: data}));
    }

    render() {
        return (
            <div>
                <p>name: {this.state?.data.name}</p>
                <p>age: {this.state?.data.age}</p>
            </div>
        )
    }
}