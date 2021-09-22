import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const Login = () => {
	const [isNewUser, setIsNewUser] = useState(false);
	const [user, setUser] = useState({
		isSignIn: false,
		name: "",
		email: "",
		password: "",
		errorMessage: "",
		SignedInSuccessMessage: "",
		SignedUpSuccessMessage: "",
	});
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const handleGoogleSignIn = (auth, provider) => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const { displayName, email, photoURL } = result.user;
				const signedInUser = {
					isSignIn: true,
					name: displayName,
					email: email,
					photo: photoURL,
				};
				setUser(signedInUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	const handleFacebookSignIn = () => {};
	const handleOnBlur = (e) => {
		let isFieldValid = true;
		const [name, value] = [e.target.name, e.target.value];
		isFieldValid = name === "name" && /(\S.{2,})/.test(value);
		isFieldValid = name === "email" && /\S+@\S+\.\S+/.test(value);
		isFieldValid = name === "password" && /((?=.*\d)(\S).{6,})/.test(value);
	};
	const handleSubmit = () => {};
	return (
		<div className="container">
			{" "}
			<div className="row">
				{" "}
				<div className="col-md-5 mx-auto my-5">
					{" "}
					<div className="bg-white text-dark rounded shadow">
						{" "}
						<h2 className="text-center">Login</h2>{" "}
						<div className="form-area">
							{" "}
							<div className="continue-box text-center my-3">
								{" "}
								<h5 className="d-inline text-black">Continue With: </h5>{" "}
								<button
									className="mr-2 bg-transparent border border-warning rounded-circle p-2 text-success"
									onClick={() => handleGoogleSignIn(auth, googleProvider)}
								>
									{" "}
									<FontAwesomeIcon icon={faGoogle} size="lg" />{" "}
								</button>{" "}
								<button className="ml-2 bg-transparent border border-warning rounded-circle display-5 p-2 text-primary">
									{" "}
									<FontAwesomeIcon icon={faFacebook} size="lg" />{" "}
								</button>{" "}
							</div>{" "}
							<div className="form-wrapper text-center my-3">
								{" "}
								<form action="" onSubmit={handleSubmit}>
									{" "}
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Enter you Name"
										className="border border-3 border-warning rounded"
										onBlur={handleOnBlur}
										required
									/>{" "}
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Enter you Email"
										className="border border-3 border-warning rounded my-2"
										onBlur={handleOnBlur}
										required
									/>{" "}
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Enter you Password"
										className="border border-3 border-warning rounded"
										onBlur={handleOnBlur}
										required
									/>{" "}
									<input
										type="submit"
										name="submit"
										id="submit"
										value="Login"
										className="border border-3 border-warning rounded my-2 d-block mx-auto px-4 py-1 bg-warning text-dark font-weight-bold"
									/>{" "}
								</form>{" "}
							</div>{" "}
							<div className="form-bottom py-2 text-center">
								{" "}
								<h6>
									{" "}
									<span>Don't have an Account?</span>{" "}
									<button className="ml-2 border-1 border-warning rounded-pill bg-transparent">
										{" "}
										Sign Up{" "}
									</button>{" "}
								</h6>{" "}
							</div>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
};
export default Login;
