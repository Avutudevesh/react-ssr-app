import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
	const store = createStore();
	const promises = matchRoutes(routes, req.path).map(({ route }) => {
		console.log(route.loadData(store));
		return route.loadData ? route.loadData(store) : null;
	});
	console.log(promises);
	Promise.all(promises).then(() => {
		res.send(renderer(req, store));
	});
});
app.listen(3000, () => {
	console.log("listening to port 3000");
});
