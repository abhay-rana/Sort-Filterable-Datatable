import React from "react";

import Header from "../components/header";
import ProductListTable from "../components/product-list-table";

import { data_set } from "../scripts/data-set";

const Home = (props) => {
	return (
		<>
			<div>
				<Header />
				{props.data.length > 0 && <ProductListTable product_list={props.data} setProductListData={props.Product_List_Set_Data} />}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	data: state.product_store.data,
});

const mapDispatchToProps = (dispatch) => ({
	Product_List_Set_Data: () => dispatch({ type: "" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
