import React, { Component } from "react";
import axios from "axios";
import arrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import { Link } from "react-router-dom";
import "./InventoryDetails.scss";

const API_URL = "http://localhost:8080";

class InventoryDetails extends Component {
  state = {
    inventoryId: "",
    inventory: {},
    instock: "",
  };

  componentDidMount() {
    let inventoryId = this.props.match.params.id;

    axios.get(API_URL + "/inventory/" + inventoryId).then((res) => {
      console.log(res.data);
      // console.log(res.data.name)
      console.log(this.props.match.params.id);
      this.setState({ inventory: res.data });
      console.log(this.state.inventory.name);
      console.log(this.state.inventory.isInstock);
    });
  }

  componentDidUpdate() {
    if (this.state.inventory.isInstock) {
      this.status.className = "status status-isinstock";
    } else {
      this.status.className = "status status-isoutofstock";
    }
  }
  render() {
    return (
      <section className="item">
        <div className="tablet-align">
          <div className="item-head">
            <div>
              <Link to="/inventory" className="">
                <img src={arrow} className="item-arrow" />
              </Link>
            </div>
            <div>
              <h1 className="item-name">{this.state.inventory.name}</h1>
            </div>
          </div>
          <div ref={(status) => (this.status = status)} className="status">
            {this.state.inventory.isInstock ? "In stock" : "Out of stock"}
          </div>
        </div>

        <div className="tablet-container">
          <div className="tablet-description">
            <h1 className="item-description-header">ITEM DESCRIPTION</h1>
            <p className="item-description">
              {this.state.inventory.description}
            </p>
          </div>

          <div>
            <div className="tablet-container laptop-container">
              <div>
                <h1 className="item-orderedby-header tablet-order">
                  ORDERED BY
                </h1>
                <p className="item-orderedby">Anna Mastoris</p>
              </div>
              <div>
                <h1 className="item-reference-header">REFERENCE NUMBER</h1>
                <p className="item-reference">{this.state.inventory.id}</p>
              </div>
            </div>

            <div className="tablet-container laptop-container">
              <div>
                <h1 className="item-lastordered-header tablet-lorder">
                  LAST ORDERED
                </h1>
                <p className="item-lastordered">
                  {this.state.inventory.lastOrdered}
                </p>
              </div>
              <div>
                <h1 className="item-location-header">LOCATION</h1>
                <p className="item-location">
                  {this.state.inventory.city}, {this.state.inventory.country}{" "}
                </p>
              </div>
            </div>

            <div>
              <h1 className="item-quantity-header">QUANTITY</h1>
              <p className="item-quantity">{this.state.inventory.quantity}</p>
            </div>
            <div>
              <h1 className="item-categories-header">CATEGORIES</h1>
              <p className="item-categories">
                {this.state.inventory.categories}
              </p>
            </div>
          </div>
        </div>
        <div className="tablet-btn">
          <button className="edit-button">EDIT</button>
        </div>
      </section>
    );
  }
}

export default InventoryDetails;
