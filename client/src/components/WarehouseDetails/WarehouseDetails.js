import React, { Component } from 'react';
import axios from 'axios';
import './WarehouseDetails.scss';
import InventoryList from '../InventoryList/InventoryList';
import arrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';
import { Link } from 'react-router-dom';

const API_URL = "http://localhost:8080/";

class WarehouseDetails extends Component {
    state = {
        warehouseInfo: {
            address: {},
            contact: {},
            inventory: []
        }
    }

    fetchWarehouseInfo() {
        let warehouseId = this.props.match.params.id;
        axios
            .get(API_URL + "warehouses/" + warehouseId)
            .then(result => {
                this.setState({
                    warehouseInfo: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    deleteInventoryItem = (id) => {
        console.log(id);
    
        axios
            .delete(API_URL + "inventory/" + id)
            .then(result => {
                this.fetchWarehouseInfo();
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    componentDidMount() {
        this.fetchWarehouseInfo();
    }

    render() {
        let warehouseBackendInfo = this.state.warehouseInfo;

        return(
            <section className="warehouseDetails">
                <div className="warehouseDetails__warehouse">
                    <Link to="/warehouses" className="warehouseDetails__header-link">
                        <div className="warehouseDetails__header">
                            <img src={arrow} className="warehouseDetails__header-arrow"></img>
                            <h1 className="warehouseDetails__header-name">{warehouseBackendInfo.name}</h1>
                        </div>
                    </Link>

                    <div className="warehouseDetails__information">
                        <div className="warehouseDetails__address">
                            <h3 className="warehouseDetails__address-title">ADDRESS</h3>
                            <p className="warehouseDetails__address-address">{warehouseBackendInfo.address.street}</p>
                            <p className="warehouseDetails__address-address warehouseDetails__marginRemoved warehouseDetails__italic">{warehouseBackendInfo.address.location}</p>
                        </div>

                        <div className="warehouseDetails__contact">
                            <h3 className="warehouseDetails__contact-title">CONTACT</h3>
                            <p className="warehouseDetails__contact-name warehouseDetails__marginRemoved">{warehouseBackendInfo.contact.name}</p>
                            <p className="warehouseDetails__contact-position warehouseDetails__marginRemoved warehouseDetails__italic">{warehouseBackendInfo.contact.position}</p>

                            <p className="warehouseDetails__contact-phone warehouseDetails__italic">{warehouseBackendInfo.contact.phone}</p>
                            <p className="warehouseDetails__contact-email warehouseDetails__marginRemoved warehouseDetails__italic">{warehouseBackendInfo.contact.email}</p>
                        </div>
                    </div>
                </div>

                {this.state.warehouseInfo.inventory.length !== 0 &&
                    <div className="warehouseDetails__item">
                        <InventoryList inventoryList={this.state.warehouseInfo.inventory} deleteInventoryItem={this.deleteInventoryItem} />
                    </div>
                }

            </section>
        )
    }
}

export default WarehouseDetails;