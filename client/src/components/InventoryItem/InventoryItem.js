import React from "react";
import "./InventoryItem.scss";
import remove from "../../assets/Icons/SVG/Icon-kebab-default.svg";

const InventoryItem = (props) => {
  const {
    categories,
    city,
    country,
    description,
    isInstock,
    lastOrdered,
    name,
    quantity,
    warehouseId,
    first,
  } = props;

  let status = "";

  if (isInstock) {
    status = "In Stock";
  } else {
    status = "Out of Stock";
  }

  let descriptionContainerClassName = "inventory__description-container";
  if (first === "first") {
    descriptionContainerClassName += " inventory__description-container--first";
  }

  return (
    <div className="inventory__card">
      <div className={descriptionContainerClassName}>
        <div className="inventory__header3-container">
          <h3 className="inventory__header3">ITEM</h3>
          <img
            src={remove}
            className="inventory__remove inventory__remove--mobile"
          />
        </div>
        <p className="inventory__product-name">{name}</p>
        <p className="inventory__paragraph">{description}</p>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className="inventory__header3">LAST ORDERED</h3>
        <p className="inventory__paragraph">{lastOrdered}</p>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className="inventory__header3">LOCATION</h3>
        <p className="inventory__paragraph">{city}</p>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className="inventory__header3">QUANTITY</h3>
        <p className="inventory__paragraph">{quantity}</p>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className="inventory__header3">STATUS</h3>
        <p className="inventory__paragraph">{status}</p>
      </div>
    </div>
  );
};

export default InventoryItem;
