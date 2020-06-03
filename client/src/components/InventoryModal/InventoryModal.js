import React, { Component } from "react";
import Modal from "react-modal";
import "./InventoryModal.scss";
import Select from "react-select";
import Toggle from "react-toggle";
import "react-toggle/style.css";

//This is import or else the browser will scream at you

Modal.setAppElement("#root");

const options = [
  { value: "canada", label: "Canada" },
  { value: "united states", label: "United States" },
  { value: "brazil", label: "Brazil" },
  { value: "hong kong", label: "Hong Kong" },
];

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
    const { width, modalIsOpen, closeModal } = this.props;

    console.log(this.props);

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
      customStyles.content.width = "600px";
      customStyles.content.height = "500px";
    }

    if (width >= 1200) {
      customStyles.content.width = "600px";
      customStyles.content.height = "600px";
    }

    return (
      <Modal isOpen={modalIsOpen} style={customStyles}>
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
                <Select options={options} className="modal__select" />
                <label className="modal__label">STATUS</label>
                <div className="modal__toggle-container">
                  <p className="modal__toggle-text">In Stock</p>
                  <Toggle
                    id="inStock"
                    defaultChecked={this.state.inStock}
                    className="modal__toggle"
                    icons={false}
                    // onChange={this.handleCheeseChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal__textarea-container">
              <label className="modal__label">ITEM DESCRIPTION</label>
              <textarea className="modal__textarea" placeholder="(OPTIONAL)" />
            </div>

            <div className="modal__button-container">
              <button className="modal__button modal__button--save">
                SAVE
              </button>
              <button
                className="modal__button modal__button--cancel"
                onClick={(event) => closeModal(event)}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default InventoryModal;
