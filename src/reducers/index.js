import { combineReducers, createStore, compose } from "redux";

const reducers = combineReducers({
	product_list_store: ProductListReducer,
});

const store = createStore(reducers);

export default store;
