import React from "react";

const ReviewItem = (props) => {
	const { name, img, quantity } = props.product;

	const reviewItemStyle = {
		border: "2px solid gray",
		padding: "10px",
		margin: "10px 0",
		borderRadius: "10px",
	};
	return (
		<div style={reviewItemStyle}>
			<img src={img} alt="review item" className="" />
			<h4>{name}</h4>
			<h5>Quantity: {quantity}</h5>
			<button className="btn btn-warning">Remove</button>
		</div>
	);
};

export default ReviewItem;
