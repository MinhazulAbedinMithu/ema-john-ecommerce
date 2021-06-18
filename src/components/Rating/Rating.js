import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating = (props) => {
	return (
		<ReactStars
			count={5}
			value={props.star}
			size={30}
			activeColor="#ffd700"
      edit= {false}
		/>
	);
};

export default Rating;
