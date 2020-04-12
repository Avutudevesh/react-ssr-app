import express from "express";
import rendered from "./helpers/renderer";
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
	res.send(rendered(req));
});
app.listen(3000, () => {
	console.log("listening to port 3000");
});
