import React, { useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
	const first10 = fakeData.slice(0, 10);
	const [products, setProducts] = useState(first10);
	const [cart, setCart] = useState([]);

	const handleAddProduct = (product) => {
		console.log(product);
		const newCart = [...cart, product];
		setCart(newCart);
		const sameProduct = newCart.filter((pd) => pd.key === product.key);
		const count = sameProduct.length;
		addToDatabaseCart(product.key, count);
	};

	return (
		<div>
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
						<Cart cart={cart} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
