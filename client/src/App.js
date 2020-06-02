import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
// import warehouses from '';
// import inventory from '';
import Header from './components/header/header';


class App extends Component {
  render() {
    return (
     <>
      <Router>
     <Header />
      <Switch>
        {/* <Route path='/' exact component={ warehouses } />; {/* redirects to warehouse */}
        {/* <Route path="/warehouses" component={ warehouses } /> {/* All warehouse List */}
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
