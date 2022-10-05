import React, { memo } from "react";
import { useLocation } from "wouter";

import Button from "./common/button";

const Header = () => {
	const [location, setLocation] = useLocation();
	const addEditProduct = () => {
		setLocation("/add-edit");
	};
	return (
		<>
			<div className="flex">
				<div>Product Lists</div>
				<Button onClick={addEditProduct}>Add New Product</Button>
			</div>
		</>
	);
};

export default memo(Header);
