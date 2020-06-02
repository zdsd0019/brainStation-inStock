import React from "react";

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
  } = props;

  console.log(props.isInstock);

  let status = "";

  if (isInstock) {
    status = "In Stock";
  } else {
    status = "Out of Stock";
  }

  return (
    <div className="inventory__card">
      <div className="inventory__description-container">
        <h3 className="inventory__header3">ITEM</h3>
        <p className="inventory__product-name">{name}</p>
        <p className="inventory__paragraph">{description}</p>
      </div>

      <div className="inventory__description-container">
        <h3 className="inventory__header3">LAST ORDERED</h3>
        <p className="inventory__paragraph">{lastOrdered}</p>
      </div>

      <div className="inventory__description-container">
        <h3 className="inventory__header3">LOCATION</h3>
        <p className="inventory__paragraph">{city}</p>
      </div>

      <div className="inventory__description-container">
        <h3 className="inventory__header3">QUANTITY</h3>
        <p className="inventory__paragraph">{quantity}</p>
      </div>

      <div className="inventory__description-container">
        <h3 className="inventory__header3">STATUS</h3>
        <p className="inventory__paragraph">{status}</p>
      </div>
    </div>
  );
};

export default InventoryItem;
