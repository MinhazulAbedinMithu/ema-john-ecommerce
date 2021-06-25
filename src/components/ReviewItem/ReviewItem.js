import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
	const { name, img, quantity, price, key } = props.product;

	return (
		<div className="review-item">
			<img src={img} alt="review item" className="" />
			<h4>{name}</h4>
			<h5>Quantity: {quantity}</h5>
			<p>Price: $ {price}</p>
			<button
				className="btn btn-warning item-dlt-btn"
				onClick={() => props.handleRemoveProduct(key)}
			>
				Remove
			</button>
		</div>
	);
};

export default ReviewItem;
