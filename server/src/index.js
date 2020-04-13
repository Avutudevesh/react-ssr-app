import express from "express";
import rendered from "./helpers/renderer";
import createStore from "./helpers/createStore";
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
	const store = createStore();
	res.send(rendered(req, store));
});
app.listen(3000, () => {
	console.log("listening to port 3000");
});
