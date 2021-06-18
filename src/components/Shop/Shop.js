import React, { useState } from "react";
import fakeData from "../../fakeData";
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
	};



	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-9 col-12 border-right">
						{products.map((product) => (
							<Product
								product={product} 
								key={product.key} 
								handleAddProduct={handleAddProduct}
							></Product>
						))}
					</div>
					<div className="col-md-3 col-12 py-4">
						<Cart cart={cart}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
