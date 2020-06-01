import React, { Component } from 'react';
import './SingleWarehouse.scss';
import WarehouseList from '../WarehouseList/WarehouseList';

class SingleWarehouse extends Component {
    render() {
        return (
            <div className="warehouseList__singleWarehouse">
                <h3>{this.props.name}</h3>
                <p>{this.props.address.street}, {this.props.address.location}</p>

                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.position}</p>

                <p>{this.props.contact.phone}</p>
                <p>{this.props.contact.email}</p>

                <p>{this.props.inventoryCategories}</p>
            </div>
        )
    }
}

export default SingleWarehouse;