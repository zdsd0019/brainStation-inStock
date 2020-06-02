import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import WarehouseList from './components/WarehouseList/WarehouseList';
// import inventory from '';


class App extends Component {
  render() {
    return (
     <>
     <Router>
      <Switch>
        <Route path='/' exact component={ WarehouseList } /> {/* redirects to warehouse */}
        <Route path="/warehouses" component={ WarehouseList } /> {/* All warehouse List
        {/* <Route path="/inventory" component = { inventory } /> {/* All Inventory List */}
        {/* <Route path='/warehouses/:id' component={ warehouses } />; {/* Warehouse details */}
        {/* <Route path='/inventory/:id' component={ inventory } />; {/* Inventory details */}
      </Switch>
      </Router>
     </>
    );
  }
}

export default App;
