import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CreateReport } from "./Pages/Reports/Report";

ReactDOM.render(
	<React.StrictMode>
		<CreateReport />
	</React.StrictMode>,
	document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
