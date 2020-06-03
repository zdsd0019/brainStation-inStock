import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Inventory} /> {/* redirects to warehouse */}
            <Route path="/warehouses" exact component={WarehouseList} /> {/* All warehouse List */}
            <Route path="/inventory" component = { Inventory } /> {/* All Inventory List */}
            <Route path='/warehouses/:id' component={ WarehouseDetails } />; {/* Warehouse details
            {/* <Route path='/inventory/:id' component={ inventory } />; {/* Inventory details */}
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
