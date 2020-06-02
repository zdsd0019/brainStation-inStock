import React from "react";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryList = (props) => {
  // console.log("props", props);
  // console.log(props.inventoryList);

  const { inventoryList } = props;
  const createInventoryItem = inventoryList.map((item) => {
    return (
      <InventoryItem
        key={item.id}
        name={item.name}
        description={item.description}
        quantity={item.quantity}
        lastOrdered={item.lastOrdered}
        city={item.city}
        country={item.country}
        isInstock={item.isInstock}
        categories={item.categories}
        warehouseId={item.warehouseId}
      />
    );
  });

  return <div className="inventory__list-container">{createInventoryItem}</div>;
};

export default InventoryList;
