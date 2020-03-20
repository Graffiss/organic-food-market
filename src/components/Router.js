import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Inventory from './Inventory';
import Store from './Store';

const Router = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/store" component={Store} />
			<Route path="/admin" component={Inventory} />
			<Route component={NotFound} />
		</Switch>
	</main>
);

export default Router;
