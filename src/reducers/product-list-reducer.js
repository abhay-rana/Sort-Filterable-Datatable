import { data_set } from "../scripts/data-set";

const INITIAL_STATE = {
	data: data_set,
	edit_product: null,
};

export const ProductListReducer = (state = INITIAL_STATE, action) => {
	let newState = Object.assign({}, state);
	if (action.type === "SET_SORTED_DATA") {
		newState.data = [...action.data];
		return newState;
	}
	if (action.type === "EDIT_PRODUCT_LIST_DATA") {
		newState.edit_product = { ...action.data };
		return newState;
	}
	if (action.type === "PRODUCT_LIST_SET_DETAILS") {
		newState.edit_product = { ...state.edit_product };
		newState.edit_product[action.key] = action.value;
		if (newState.edit_product.cost_price && newState.edit_product.selling_price) {
			const discount_percentage = ((newState.edit_product.cost_price - newState.edit_product.selling_price) / newState.edit_product.cost_price) * 100;

			const discount = (newState.edit_product.cost_price * discount_percentage) / 100;
			newState.edit_product["discount_percentage"] = parseFloat(discount_percentage).toFixed(2);
			newState.edit_product["discount"] = parseFloat(discount).toFixed(2);
		}
		return newState;
	}
	if (action.type === "PRODUCT_LIST_ADD_EDIT_DETAILS") {
		newState.data = [...state.data, state.edit_product];
		console.log(newState.data);
		return newState;
	}
	if (action.type === "CLEAR_PRODUCT_DATA") {
		newState.edit_product = null;
		return newState;
	}
	return state;
};
