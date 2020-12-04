import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { User } from "./Pages/User/User";
import { Container } from "react-bootstrap";
import { CreateReportPage } from './Pages/Reports/CreateReportPage';

ReactDOM.render(
	<React.StrictMode>
		<Container fluid className="min-100">
			<CreateReportPage />
		</Container>
	</React.StrictMode>,
	document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
