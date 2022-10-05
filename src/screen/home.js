import React from "react";
import { connect } from "react-redux";

import Header from "../components/header";
import ProductListTable from "../components/product-list-table";

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
	data: state.product_list_store.data,
});

const mapDispatchToProps = (dispatch) => ({
	Product_List_Set_Data: (data) => dispatch({ type: "SET_SORTED_DATA", data: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
