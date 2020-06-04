import React, { Component } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:8080/";
const singleInventoryUrl = id => `"http://localhost:8080/inventory/${id}`

class InventoryDetais extends Component {
    state = {
        inventoryId: '',
        inventory: []
    }

    componentDidMount () {
        axios.get(API_URL + '/inventory') 
            .then (res => {
                console.log(res.data)
            })

        axios.get(singleInventoryUrl (this.state.inventoryId))
            .then (res => {
                console.log(res)
            })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default InventoryDetais;