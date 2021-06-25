import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import {
	getDatabaseCart,
	processOrder,
	removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import happyImage from "../../images/giphy.gif";

const Review = () => {
	const [cart, setCart] = useState([]);
	const [orderPlaced, setOrderPlaced] = useState(false);

	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);

		const cartProducts = productKeys.map((existKey) => {
			const product = fakeData.find((pd) => pd.key === existKey);
			product.quantity = savedCart[existKey];
			return product;
		});
		setCart(cartProducts);
	}, []);
	const handleRemoveProduct = (productKey) => {
		const newCart = cart.filter((pd) => pd.key !== productKey);
		setCart(newCart);
		removeFromDatabaseCart(productKey);
	};

	const handlePlaceOrder = () => {
		setCart([]);
		setOrderPlaced(true);
		processOrder();
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-9 col-12 border-right">
					{cart.map((pd) => (
						<ReviewItem
							product={pd}
							key={pd.key}
							handleRemoveProduct={handleRemoveProduct}
						></ReviewItem>
					))}
					{orderPlaced && <img src={happyImage} alt="thank you" />}
				</div>
				<div className="col-md-3 col-12 py-4">
					<Cart cart={cart}>
						<Link to="/review">
							<button onClick={handlePlaceOrder} class="btn btn-warning mx-5">
								Place Order
							</button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default Review;
