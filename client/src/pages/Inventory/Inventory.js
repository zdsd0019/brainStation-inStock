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
    width: "100vw",
    height: "100vh",
    borderRadius: "10px",
  },
};

//This is import or else the browser will scream at you
Modal.setAppElement("#root");

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      inventoryList: [],
      modalIsOpen: false,
      setModalIsOpen: false,
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

  render() {
    console.log(this.state.width);
    if (this.state.width >= 500) {
      customStyles.content.width = "350px";
      customStyles.content.height = "500px";
    }

    if (this.state.width >= 1200) {
      customStyles.content.width = "550px";
      customStyles.content.height = "600px";
    }

    return (
      <div className="inventory">
        <Modal isOpen={this.state.modalIsOpen} style={customStyles}>
          <h1>Create New</h1>
        </Modal>
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
