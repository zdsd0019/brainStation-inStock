import React, { Component } from 'react';
import './SingleWarehouse.scss';
import arrow from '../../assets/Icons/SVG/Icon-arrow-right.svg';

class SingleWarehouse extends Component {
    render() {
        return (
            <div className="warehouseList__singleWarehouse">
                <div className="warehouseList__singleWarehouse-address">
                    <div className="warehouseList__singleWarehouse-address-title">
                        <h3 className="warehouseList__singleWarehouse-paragraph warehouseList__singleWarehouse-name">{this.props.name}</h3>
                        <p className="warehouseList__singleWarehouse-paragraph warehouseList__singleWarehouse--marginBottom">{this.props.address.street}, {this.props.address.location}</p>
                    </div>
                    <img src={arrow} className="warehouseList__singleWarehouse-arrow" alt="ArrowRight" />
                </div>
                <div className="warehouseList__contactNameAndPosition">
                    <p className="warehouseList__singleWarehouse-paragraph">{this.props.contact.name}</p>
                    <p className="warehouseList__singleWarehouse-paragraph warehouseList__singleWarehouse--marginBottom warehouseList__singleWarehouse-position">{this.props.contact.position}</p>
                </div>

                <div className="warehouseList__contactPhoneAndEmail">
                    <p className="warehouseList__singleWarehouse-paragraph">{this.props.contact.phone}</p>
                    <p className="warehouseList__singleWarehouse-paragraph warehouseList__singleWarehouse--marginBottom">{this.props.contact.email}</p>
                </div>

                <div className="warehouseList__warehouseInventory">
                    <p className="warehouseList__singleWarehouse-paragraph warehouseList__singleWarehouse--marginBottom warehouseList__singleWarehouse-categories">{this.props.inventoryCategories}</p>
                    <img src={arrow} className="warehouseList__singleWarehouse-arrow-laptop" alt="ArrowRight" />
                </div>
            </div>
        )
    }
}

export default SingleWarehouse;