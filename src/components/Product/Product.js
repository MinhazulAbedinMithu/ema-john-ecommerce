import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

const Product = (props) => {
	const { key, category, name, img, features, price, star, seller, stock } = props.product;

	return (
		<div className="d-flex py-4 border-bottom">
			<div className="product-img">
				<img src={img} alt="product img" />
			</div>
			<div className="product-details pl-3">
				<h5 className="text-primary ">
					<Link className="product-name" to={"/product/" + key}>
						{name}
					</Link>
				</h5>
				<div className="row">
					<div className="col-md-6 col-12">
						<p>By: {seller}</p>
						<p>
							<strong className="text-success">Price: {price}</strong>
						</p>
						<p>
							only <b>{stock}</b> left in stock - order soon
						</p>
						
							{props.showAddToCart && (<button
								className="btn btn-warning"
								onClick={() => props.handleAddProduct(props.product)}
							>
								<FontAwesomeIcon icon={faShoppingCart} /> add to cart
							</button>)}
					</div>
					<div className="col-md-6 col-12">
						<Rating star={star} />
						<h5>Features:</h5>
						{features.map((ft) => (
							<li>
								<b>{ft.description}</b>: {ft.value}
							</li>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
