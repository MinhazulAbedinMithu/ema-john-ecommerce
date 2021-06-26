import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div>
			<div href="#home" className="logo">
				<img src={logo} alt="Logo" />
			</div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Nav className="mx-auto">
						<Link className="nav-link" to="/shop">
							Shop
						</Link>
						<Link className="nav-link" to="/review">
							Order Review
						</Link>
						<Link className="nav-link" to="/inventory">
							Manage Inventory
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
