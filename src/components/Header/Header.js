import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
	return (
		<div>
			<div href="#home" className="logo">
				<img src={logo} alt="Logo" />
			</div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Nav className="mx-auto">
						<Nav.Link className="nav-link" href="/shop">
							Shop
						</Nav.Link>
						<Nav.Link className="nav-link" href="/review">
							Order Review
						</Nav.Link>
						<Nav.Link className="nav-link" href="/inventory">
							Manage Inventory
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
