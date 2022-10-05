import { combineReducers, createStore, compose } from "redux";

import { ProductListReducer } from "./product-list-reducer";

const reducers = combineReducers({
	product_list_store: ProductListReducer,
});

const store = createStore(reducers);

export default store;
