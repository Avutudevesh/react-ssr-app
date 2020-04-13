import React from "react";

const Home = () => {
	return (
		<div>
			<div>I am best home component</div>
			<button onClick={() => console.log("I am clicked")}>Press me</button>
		</div>
	);
};

export default {
	component: Home
};
