import React, { Component } from 'react';
import './WarehouseList.scss';
import SingleWarehouse from '../SingleWarehouse/SingleWarehouse';

class WarehouseList extends Component {
    state = {
        warehouses: [
            {
              "id": "W0",
              "name": "Punder Mifflin",
              "address": {
                "street": "123 Fake Street W",
                "location": "Toronto, CAN"
              },
              "contact": {
                "name": "Dimity Durian",
                "position": "Regional Manager",
                "phone": "416 679 4324",
                "email": "DimoDurian@pundermifflin.com"
              },
              "inventoryCategories": "Paper, Crafts, Office supplies"
            },
            {
              "id": "W1",
              "name": "The Place",
              "address": {
                "street": "667 Some Street W",
                "location": "Toronto, CAN"
              },
              "contact": {
                "name": "Danbi Bambi",
                "position": "Office Manager",
                "phone": "416 679 4324",
                "email": "DanbiBambi@theplace.com"
              },
              "inventoryCategories": "Automotion, Mechanical, Transportation, Heavy"
            },
            {
              "id": "W2",
              "name": "Stocker Construction",
              "address": {
                "street": "8893 King Street W",
                "location": "Toronto, CAN"
              },
              "contact": {
                "name": "Franky Zee",
                "position": "Manager",
                "phone": "416 434 5545",
                "email": "ZeeZeeF@stocker.com"
              },
              "inventoryCategories": "Footwear, Safety, Construction"
            }
          ]          
    }

    render() {
        return(
            <>
                {/* <NavigationBar /> */}
                <div className="warehouseList">
                    <h1 className="warehouseList__title">Locations</h1>
                    <form className="warehouseList__form">
                        <input type="search" placeholder="Search"></input>
                    </form>
                    { this.state.warehouses.map(warehouse => {
                        return (
                            <SingleWarehouse key={warehouse.id} name={warehouse.name} address={warehouse.address} contact={warehouse.contact} inventoryCategories={warehouse.inventoryCategories} />
                        )
                    })}
                </div>
            </>
        )
    }
}

export default WarehouseList;