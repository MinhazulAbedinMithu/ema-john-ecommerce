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
						<Nav.Link className="nav-link" href="#home">
							Shop
						</Nav.Link>
						<Nav.Link className="nav-link" href="#features">
							Order Review
						</Nav.Link>
						<Nav.Link className="nav-link" href="#pricing">
							Manage Inventory here
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
