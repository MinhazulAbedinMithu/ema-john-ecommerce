import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
			<Header />
				<Switch>
					<Route path="/shop">
						<Shop />
					</Route>
					<PrivateRoute path="/review">
						<Review />
					</PrivateRoute>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/inventory">
						<Inventory />
					</PrivateRoute>
					<Route exact path="/">
						<Shop />
					</Route>
					<Route path="/product/:productKey">
						<ProductDetails/>
					</Route>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
