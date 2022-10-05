import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/global.css";

import App from "./app";

import store from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
