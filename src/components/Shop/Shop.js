import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import fakeData from "../../fakeData";
import {
	addToDatabaseCart,
	getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
	const first10 = fakeData.slice(0, 10);
	const [products] = useState(first10);
	const [cart, setCart] = useState([]);

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

	const handleAddProduct = (product) => {
		const toBeAddedKey = product.key;
		const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
		let count = 1;
		let newCart;
		if (sameProduct) {
			count = sameProduct.quantity + 1;
			sameProduct.quantity = count;
			const othersProduct = cart.filter((pd) => pd.key !== toBeAddedKey);
			newCart = [...othersProduct, sameProduct];
		} else {
			product.quantity = count;
			newCart = [...cart, product];
		}
		setCart(newCart);
		addToDatabaseCart(toBeAddedKey, count);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-9 col-12 border-right">
					{products.map((product) => (
						<Product
							showAddToCart={true}
							product={product}
							key={product.key}
							handleAddProduct={handleAddProduct}
						></Product>
					))}
				</div>
				<div className="col-md-3 col-12 py-4">
					<Cart cart={cart}>
						<Link to="/review" className="text-center">
							<button class="btn btn-warning mx-5">Review Order</button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
