import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from './Header';
import { Products } from './Products';

function App() {
  return (
  	<Router>
	     <div className="mb-3">
	      <Switch>
	        <Route exact path="/">
	          <Header />
	          <Products />
	        </Route>
	      </Switch>
	    </div>
    </Router>
  );
}

export default App;