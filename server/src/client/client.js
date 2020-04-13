//startup point for client application
import "babel-polyfill";
import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../client/Routes";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));
ReactDom.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
