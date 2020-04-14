import React from "react";

export default ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return <div> Oops.. Page Not Found </div>;
};
