import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HomePage } from './Pages/HomePage/HomePage';
import { User } from './Pages/User/User';
import { Container } from 'react-bootstrap';
import { CreateReportPage } from './Pages/Reports/CreateReportPage';
import { Login } from './Pages/Login/Login';
import { SignUp } from './Pages/Signup/SignUp';

ReactDOM.render(
	<React.StrictMode>
		<Container fluid className="min-100">
			<SignUp/>
		</Container>
	</React.StrictMode>,
	document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
