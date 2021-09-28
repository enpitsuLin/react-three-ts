import React from "react";
import { Route } from "react-router-dom";
import GrassPage from "./scenes/Grass";
import SimplePage from "./scenes/Simple";

const App: React.FC = () => {
	return (
		<div className="container">
			<Route exact path="/simple" component={SimplePage} />
			<Route exact path="/grass" component={GrassPage} />
		</div>
	);
};

export default App;
