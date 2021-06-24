import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);

		const cartProducts = productKeys.map((key) => {
			const product = fakeData.find((pd) => pd.key === key);
			product.quantity = savedCart[key];
			return product;
		});
		setCart(cartProducts);
	}, []);
	return (
		<Container>
			<h1>This is review section.</h1>
			<h2>{cart.length}</h2>
			{cart.map((pd) => (
				<ReviewItem product={pd} key={pd.key}></ReviewItem>
			))}
		</Container>
	);
};

export default Review;
