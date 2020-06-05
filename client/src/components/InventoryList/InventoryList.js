import React from "react";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryList = (props) => {
  const { inventoryList } = props;
  const createInventoryItem = inventoryList.map((item, index) => {
    let first = "";
    if (index === 0) {
      first = "first";
    }

    return (
      <InventoryItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        quantity={item.quantity}
        lastOrdered={item.lastOrdered}
        city={item.city}
        country={item.country}
        isInstock={item.isInstock}
        categories={item.categories}
        warehouseId={item.warehouseId}
        first={first}
        id={item.id}
        deleteInventoryItem={props.deleteInventoryItem}
      />
    );
  });

  return <div className="inventory__list-container">{createInventoryItem}</div>;
};

export default InventoryList;
