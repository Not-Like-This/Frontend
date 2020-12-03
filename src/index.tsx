import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { User } from "./Pages/User/User";
import { HomePage } from "./Pages/HomePage/HomePage";

ReactDOM.render(
	<React.StrictMode>
		<HomePage />
	</React.StrictMode>,
	document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
