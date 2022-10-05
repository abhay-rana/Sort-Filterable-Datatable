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
			<div className="flex border-2 border-red-200 justify-around mb-4">
				<div className="p-2 text-xl">Product Lists</div>
				<Button onClick={addEditProduct} className="bg-orange-400 text-white hover:bg-warning">
					Add New Product
				</Button>
			</div>
		</>
	);
};

export default memo(Header);
