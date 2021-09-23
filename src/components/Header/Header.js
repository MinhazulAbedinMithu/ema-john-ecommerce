import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
const Header = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const {email, name, photo} = loggedInUser;
	
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

						{
							email ? (
								<Link className="nav-link bg-dark rounded border-1 border-warning" to="">
								<img src={photo} alt="profile" className="img-fluid w-50 rounded-circle"/>
						</Link>
							) : (
								<Link className="nav-link bg-warning rounded px-4 text-dark border-0" to="/login">
							Login
						</Link>
							)
						}
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
