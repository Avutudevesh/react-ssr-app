import React from "react";
import { renderRoutes } from "react-router-config";
const App = ({ route }) => {
	return (
		<div>
			<div>I am a header</div>
			{renderRoutes(route.routes)}
		</div>
	);
};

export default {
	component: App
};
