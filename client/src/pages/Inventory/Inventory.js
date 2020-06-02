import React, { Component } from "react";
import "./Inventory.scss";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";

const API_URL = "http://localhost:8080/inventory";

class Inventory extends Component {
  state = {
    inventoryList: [],
  };

  componentDidMount() {
    this.fetchInventory();
  }

  fetchInventory = () => {
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          inventoryList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.inventoryList);

    return (
      <div className="inventory">
        <div className="inventory__header-container">
          <h1 className="inventory__header">Inventory</h1>
          <input
            className="inventory__search"
            type="search"
            placeholder="Search"
          ></input>
        </div>
        <InventoryList inventoryList={this.state.inventoryList} />
      </div>
    );
  }
}

export default Inventory;
