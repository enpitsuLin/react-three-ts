import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./style/index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<div className="link-nav">
				<NavLink to="/simple" activeClassName="active">
					simple &gt;&gt;
				</NavLink>
				<NavLink to="/grass" activeClassName="active">
					grass &gt;&gt;
				</NavLink>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
