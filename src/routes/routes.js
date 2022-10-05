import React from "react";
import { Route, Switch } from "wouter";

import Home from "../screen/home";
import AddEditProduct from "../screen/add-edit-product";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />;
			<Route path="/add-edit" component={AddEditProduct} />;
			<Route component={404} />
		</Switch>
	);
};

export default Routes;
