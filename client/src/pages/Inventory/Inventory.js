import React, { Component } from "react";
import "./Inventory.scss";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import Modal from "react-modal";

const API_URL = "http://localhost:8080/inventory";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "200px",
    borderRadius: "10px",
  },
};

class Inventory extends Component {
  state = {
    inventoryList: [],
    modalIsOpen: true,
    setModalIsOpen: false,
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
    return (
      <div className="inventory">
        <Modal isOpen={this.state.modalIsOpen} style={customStyles} />
        <div className="inventory__header-container">
          <h1 className="inventory__header">Inventory</h1>
          <input
            className="inventory__search"
            type="search"
            placeholder="Search"
          ></input>
        </div>
        <InventoryList inventoryList={this.state.inventoryList} />
        <button className="inventory__add-button">+</button>
      </div>
    );
  }
}

export default Inventory;
