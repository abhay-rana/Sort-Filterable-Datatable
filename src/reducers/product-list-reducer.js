import { data_set } from "../scripts/data-set";

const INITIAL_STATE = {
	data: data_set,
};

export const ProductListReducer = (state = INITIAL_STATE, action) => {
	let newState = Object.assign({}, state);
	if (action.type === "SET_SORTED_DATA") {
		newState.data = [...action.data];
		return newState;
	}
	return state;
};
