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
                <p>{this.state?.data.name}</p>
                <p>{this.state?.data.age}</p>
            </div>
        )
    }
}