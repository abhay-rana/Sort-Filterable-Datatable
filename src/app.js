import React, { useMemo, useState } from "react";

import Button from "./components/common/button";
import ProductListTable from "./screen/product-list-table";

import { data_set } from "./scripts/data-set";

const App = () => {
	return (
		<>
			<ProductListTable product_list={data_set} />
		</>
	);
};

export default App;
