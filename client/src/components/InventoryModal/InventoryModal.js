import React, { Component } from "react";
import Modal from "react-modal";
import "./InventoryModal.scss";

Modal.setAppElement("#root");

class InventoryModal extends Component {
  state = {
    product: "",
    lastOrdered: "",
    city: "",
    country: "",
    quantity: "",
    inStock: false,
    description: "",
  };

  render() {
    const { width, modalIsOpen } = this.props;

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

    if (width >= 500) {
      customStyles.content.width = "350px";
      customStyles.content.height = "500px";
    }

    if (width >= 1200) {
      customStyles.content.width = "550px";
      customStyles.content.height = "600px";
    }

    return (
      <Modal isOpen={true} style={customStyles}>
        <div className="modal">
          <h1 className="modal__header">Create New</h1>
          <form className="modal__form">
            <div className="modal__two-col-container">
              <div className="modal__column-one">
                <label className="modal__label">PRODUCT</label>
                <input className="modal__input" placeholder="Item Name" />
                <label className="modal__label">CITY</label>
                <input className="modal__input" placeholder="City" />
                <label className="modal__label">QUANTITY</label>
                <input className="modal__input" placeholder="0" />
              </div>
              <div className="modal__column-two">
                <label className="modal__label">PRODUCT</label>
                <input className="modal__input" placeholder="Item Name" />
                <label className="modal__label">CITY</label>
                <select>
                  <option value="0">Select car:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                </select>
                <label className="modal__label">QUANTITY</label>
                <input placeholder="0" />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default InventoryModal;
