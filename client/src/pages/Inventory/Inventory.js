import React, { Component } from "react";
import "./Inventory.scss";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryModal from "../../components/InventoryModal/InventoryModal";

const API_URL = "http://localhost:8080/inventory";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    borderRadius: "10px",
  },
};

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      inventoryList: [],
      modalIsOpen: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.fetchInventory();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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

  createNewInventory = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = (event) => {
    event.preventDefault();
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <div className="inventory">
        <InventoryModal
          width={this.state.width}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
        <div className="inventory__header-container">
          <h1 className="inventory__header">Inventory</h1>
          <input
            className="inventory__search"
            type="search"
            placeholder="Search"
          ></input>
        </div>
        <InventoryList inventoryList={this.state.inventoryList} />
        <button
          className="inventory__add-button"
          onClick={this.createNewInventory}
        >
          +
        </button>
      </div>
    );
  }
}

export default Inventory;
