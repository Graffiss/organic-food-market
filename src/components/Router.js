import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import NotFound from './NotFound';
import Inventory from './Inventory';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/store" component={App} />
			<Route path="/admin" component={Inventory} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
