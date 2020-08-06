import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from './Header';
import { Products } from './Products';
import { Menus } from './Menus';
import { AntMenu } from './AntMenu';

function App() {
  return (
  	<Router>
	    <div className="mb-3">
	      <Switch>
	        <Route exact path="/">
	          <Header />
	          <Products />
	        </Route>
	        <Route exact path="/menus">
            <Menus />
	        </Route>
	        <Route exact path="/menu-2">
            <AntMenu />
	        </Route>
	      </Switch>
	    </div>
    </Router>
  );
}

export default App;