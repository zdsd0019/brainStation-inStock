import React, { Component } from 'react';

class SingleInventory extends Component {
    
    render() {
        console.log(this.props.id);
        return (
            <section key={this.props.id}>
                <h1>{this.props.id}</h1>
                <h1> {this.props.name} </h1>
            </section>
        );
    }
}

export default SingleInventory;
