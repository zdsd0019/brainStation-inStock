import React, { Component } from "react";
import Modal from "react-modal";
import "./InventoryModal.scss";
import Select from "react-select";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    startDate: "",
    city: "",
    country: "",
    quantity: "",
    isInstock: false,
    description: "",
    formValidate: false,
  };

  //handle change on name input field
  handleNameChange = (event) => {
    this.setState({
      product: event.target.value,
    });
  };

  //handle date change
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  //handle change on quantity input field
  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  //handle change on city input field
  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  //handle change on description input field
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  //handle toggle
  handleToggle = (event) => {
    if (this.state.isInstock) {
      this.setState({
        isInstock: false,
      });
    } else {
      this.setState({
        isInstock: true,
      });
    }
  };

  //handle select input change
  handleSelectInput = (country) => {
    this.setState({
      country,
    });
  };

  //handle form submission
  handleFormSubmit = (event) => {
    event.preventDefault();

    let stockStatus = "";

    if (this.state.isInstock) {
      stockStatus = "Out of Stock";
    } else {
      stockStatus = "In Stock";
    }

    let newInventoryItem = {
      name: this.state.product,
      description: this.state.description,
      quantity: this.state.quantity,
      lastOrdered: this.state.startDate,
      city: this.state.city,
      country: this.state.country.value,
      isInstock: this.state.isInstock,
    };

    this.handleFormSubmitValidation(newInventoryItem);

    if (this.state.formValidate) {
      this.props.postNewInventory(event, newInventoryItem);

      this.setState({
        product: "",
        startDate: "",
        city: "",
        country: "",
        quantity: "",
        inStock: false,
        description: "",
        formValidate: false,
        isInstock: false,
      });
    }
  };

  //handle for validation
  handleFormSubmitValidation = (newInventoryItem) => {
    //check that all input fields are not empty
    if (
      newInventoryItem.product === "" ||
      newInventoryItem.startDate === "" ||
      newInventoryItem.city === "" ||
      newInventoryItem.country === "" ||
      newInventoryItem.quantity === ""
    ) {
      alert("missing fields");
    } else {
      //check that the quantity field does not contain any letters
      if (
        typeof newInventoryItem.quantity != "boolean" &&
        !isNaN(newInventoryItem.quantity)
      ) {
        this.setState({
          formValidate: true,
        });
      } else {
        alert("enter a valid number");
      }
    }
  };

  render() {
    const { width, modalIsOpen, closeModal } = this.props;

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
          <form className="modal__form" onSubmit={this.handleFormSubmit}>
            <div className="modal__three-col-container">
              <div className="modal__column">
                <div className="modal__input-container">
                  <label className="modal__label">PRODUCT</label>
                  <input
                    className="modal__input"
                    placeholder="Item Name"
                    type="text"
                    name="name"
                    value={this.state.product}
                    onChange={this.handleNameChange}
                  />
                </div>

                <div className="modal__input-container">
                  <label className="modal__label">LAST ORDERED</label>
                  <DatePicker
                    className="modal__date-picker"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholderText="Date"
                  />
                </div>
              </div>

              <div className="modal__column">
                <div className="modal__input-container">
                  <label className="modal__label">CITY</label>
                  <input
                    className="modal__input"
                    placeholder="City"
                    type="text"
                    name="quantity"
                    value={this.state.city}
                    onChange={this.handleCityChange}
                  />
                </div>

                <div className="modal__input-container">
                  <label className="modal__label">COUNTRY</label>
                  <Select
                    options={options}
                    className="modal__select"
                    value={this.state.country}
                    onChange={this.handleSelectInput}
                  />
                </div>
              </div>

              <div className="modal__column">
                <div className="modal__input-container">
                  <label className="modal__label">QUANTITY</label>
                  <input
                    className="modal__input"
                    placeholder="Quantity"
                    type="text"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleQuantityChange}
                  />
                </div>

                <div className="modal__input-container">
                  <label className="modal__label">STATUS</label>
                  <div className="modal__toggle-container">
                    <p className="modal__toggle-text">In Stock</p>
                    <Toggle
                      id="inStock"
                      defaultChecked={this.state.isInstock}
                      className="modal__toggle"
                      icons={false}
                      onChange={this.handleToggle}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal__textarea-container">
              <label className="modal__label">ITEM DESCRIPTION</label>
              <textarea
                className="modal__textarea"
                placeholder="(OPTIONAL)"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>

            <div className="modal__button-container">
              <button
                className="modal__button modal__button--save"
                type="submit"
              >
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
