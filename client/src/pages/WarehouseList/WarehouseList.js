import React, { Component } from 'react';
import './WarehouseList.scss';
import axios from 'axios';
import SingleWarehouse from '../../components/SingleWarehouse/SingleWarehouse';

// temporary variable - we can create .env after
const API_URL = "http://localhost:8080/";

class WarehouseList extends Component {

  state = {
    warehouses: []          
  }

  setWarehousesList = () => {
    axios
      .get(API_URL + "warehouses")
      .then(result => {
        this.setState({
          warehouses: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.setWarehousesList();
  }

  render() {
      return(
          <>
            <div className="warehouseList">
              <div className="warehouseList__header">
                <h1 className="warehouseList__title">Locations</h1>
                  <form className="warehouseList__form">
                      <input className="warehouseList__search" type="search" placeholder="Search"></input>
                  </form>
              </div>
              <div className="warehouseList__tableHeader">
                <p className="warehouseList__tableHeader-warehouse">WAREHOUSE</p>
                <p className="warehouseList__tableHeader-contact">CONTACT</p>
                <p className="warehouseList__tableHeader-contactInfo">CONTACT INFORMATION</p>
                <p className="warehouseList__tableHeader-categories">CATEGORIES</p>
              </div>
                { this.state.warehouses.map(warehouse => {
                    return (
                        <SingleWarehouse key={warehouse.id} name={warehouse.name} address={warehouse.address} contact={warehouse.contact} inventoryCategories={warehouse.inventoryCategories} />
                    )
                })}
            </div>
          </>
      )
  }
}

export default WarehouseList;