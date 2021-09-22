import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
function App() {
	return (
		<div>
			
			<Router>
			<Header />
				<Switch>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/review">
						<Review />
					</Route>
					<Route path="/inventory">
						<Inventory />
					</Route>
					<Route exact path="/">
						<Shop />
					</Route>
					<Route path="/product/:productKey">
						<ProductDetails/>
					</Route>
					<Route path="/product/login">
						<Login/>
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
