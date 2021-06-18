import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
	const cart = props.cart;
	let price = cart.reduce((total, pd) => total + pd.price, 0);

	let shipping = cart.reduce((total, pd) => total + pd.shipping, 0);

  let tax = price / 10;
  
  const fixedToNumber = (num) =>{
    return Number(num.toFixed(2));
  }

	return (
		<div>
			<div className="border rounded p-2 text-center bg-dark">
      <h4 className="text-white">
				Order Summary 
			</h4>
      <h4 className="rounded-circle p-2 text-center bg-white"><FontAwesomeIcon className="text-warning" icon={faShoppingCart} /> <sup className="text-danger"><b>{cart.length}</b></sup> </h4>
      </div>
      <br />
			<h5 className="text-success">Ordered Items: <span className="float-right">{cart.length}</span></h5>
      <br />
			<p>
				Items Price: <span className="float-right">$ {fixedToNumber(price)}</span>
			</p>
			<p>
				Items Shipping: <span className="float-right">$ {fixedToNumber(shipping)}</span>
			</p>
      <p>
				Items Tax [10%]: <span className="float-right">$ {fixedToNumber(tax)}</span>
			</p>
      <hr />
      <p style={{color: 'rgb(190, 0, 0)'}}>
				<b>Grand Total: <span className="float-right">$ {fixedToNumber(price + shipping + tax)}</span></b>
			</p>
		</div>
	);
};

export default Cart;
