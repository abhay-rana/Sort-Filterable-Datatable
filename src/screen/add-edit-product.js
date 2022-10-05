import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "../components/common/button";
import Input from "../components/common/input";

const AddEditProduct = (props) => {
	useEffect(() => {
		props.add_edit_data ? (document.title = "Edit Product") : (document.title = "Add Product");

		return () => {
			props.Clear_Product_Add_Edit_data();
		};
	}, []);

	return (
		<>
			{console.log("props", props.add_edit_data)}
			<div>
				<div className="flex border-2 border-red-100 justify-center text-xl">{props.add_edit_data ? "Edit Product" : "Add Product"}</div>
				<div className="m-4 ">
					<div className="p-4">
						<Input
							type="text"
							value={props.add_edit_data?.name || ""}
							onChange={(e) => props.Product_List_Set_Details(e.target.name, e.target.value)}
							name="name"
							label="Name"
							placeholder="Enter Name of product"
						/>
					</div>
					<div className="p-4">
						<Input
							type="text"
							value={props.add_edit_data?.expiry_date || ""}
							onChange={(e) => props.Product_List_Set_Details(e.target.name, e.target.value)}
							name="expiry_date"
							label="Expiry Date"
							placeholder="Enter expiry date of product"
						/>
					</div>
					<div className="p-4">
						<Input
							type="number"
							value={props.add_edit_data?.cost_price || ""}
							onChange={(e) => props.Product_List_Set_Details(e.target.name, parseInt(e.target.value))}
							name="cost_price"
							label="Cost Price"
							placeholder="Enter Cost Price of product"
						/>
					</div>
					<div className="p-4">
						<Input
							type="number"
							value={props.add_edit_data?.selling_price || ""}
							onChange={(e) => props.Product_List_Set_Details(e.target.name, parseInt(e.target.value))}
							name="selling_price"
							label="Sell Price"
							placeholder="Enter Sell Price of product"
						/>
					</div>
					<div className="p-4">
						<Input
							type="number"
							value={props.add_edit_data?.discount_percentage || ""}
							onChange={(e) => props.Product_List_Set_Details(e.target.name, e.target.value)}
							name="discount_percentage"
							label="Discounted percentage"
							placeholder="Enter Discount Percentage of product"
							disabled
						/>
					</div>
					<div className="p-4">
						<Input
							type="number"
							value={props.add_edit_data?.discount || ""}
							onChange={(e) => props.Product_List_Set_Details(e.target.name, e.target.value)}
							name="discount"
							label="Discount"
							placeholder="Discount at the product"
							disabled
						/>
					</div>

					<div className="p-4">
						<span className="mr-6">Category</span>
						<select onChange={(e) => props.Product_List_Set_Details("category", e.target.value)}>
							<option value="Laptop">Laptop</option>
							<option value="Mobile">Mobile</option>
							<option value="Electronics">Electronics</option>
							<option value="Desktops">Desktops</option>
							<option value="Graphics Card">Graphics Card</option>
						</select>
					</div>
					<div className="p-4 ">
						<span className="mr-4">Description</span>
						<textarea placeholder="description for the product" onChange={(e) => props.Product_List_Set_Details("description", e.target.value)} />
					</div>
				</div>
				<div className="flex border-2 border-red-200 justify-center">
					<Button onClick={props.Product_List_Add_Edit_Details} className={"bg-success text-white w-[100px]"}>
						Save
					</Button>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	add_edit_data: state.product_list_store.edit_product,
});

const mapDispatchToProps = (dispatch) => ({
	Product_List_Set_Details: (key, value) => dispatch({ type: "PRODUCT_LIST_SET_DETAILS", key, value }),
	Product_List_Add_Edit_Details: (key, value) => dispatch({ type: "PRODUCT_LIST_ADD_EDIT_DETAILS", key, value }),
	Clear_Product_Add_Edit_data: () => dispatch({ type: "CLEAR_PRODUCT_DATA" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditProduct);
