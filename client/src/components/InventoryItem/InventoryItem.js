import React from "react";
import "./InventoryItem.scss";
import remove from "../../assets/Icons/SVG/Icon-kebab-default.svg";
import DropdownButton from "../DropdownButton/DropdownButton";

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

  let headerClassName = "inventory__header3";
  let descriptionContainerClassName = "inventory__description-container";
  let descriptionClassName = "inventory__paragraph";
  let removeButtonClassName = "inventory__remove";

  if (first === "first") {
    headerClassName += " inventory__header3--first";
    descriptionContainerClassName += " inventory__description-container--first";
    descriptionClassName += " inventory__paragraph--first";
    removeButtonClassName += " inventory__remove--first";
  }

  return (
    <div className="inventory__card">
      <div
        className={
          descriptionContainerClassName +
          " inventory__description-container--name"
        }
      >
        <div className="inventory__header3-container">
          <h3 className={headerClassName}>ITEM</h3>
          <DropdownButton removeButtonClassName={"inventory__remove inventory__remove--mobile"} />
        </div>
        <div>
          <p className="inventory__product-name">{name}</p>
          <p className="inventory__paragraph inventory__paragraph--description">
            {description}
          </p>
        </div>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className={headerClassName}>LAST ORDERED</h3>
        <p className={descriptionClassName}>{lastOrdered}</p>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className={headerClassName}>LOCATION</h3>
        <p className={descriptionClassName}>{city}</p>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className={headerClassName}>QUANTITY</h3>
        <p className={descriptionClassName}>{quantity}</p>
      </div>

      <div className={descriptionContainerClassName}>
        <h3 className={headerClassName}>STATUS</h3>
        <p className={descriptionClassName}>{status}</p>
      </div>

      <div className="inventory__tablet-button-container">
        <DropdownButton removeButtonClassName={removeButtonClassName + " inventory__remove--tablet"} />
      </div>
    </div>
  );
};

export default InventoryItem;
