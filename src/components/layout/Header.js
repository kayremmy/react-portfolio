import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav
			className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
			id="mainNav"
		>
			<div className="container">
				<a className="navbar-brand js-scroll" href="#page-top">
					<Link to="/">
						<img src="/images/logo.png" alt="img" />
					</Link>
				</a>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#navbarDefault"
					aria-controls="navbarDefault"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div
					className="navbar-collapse collapse justify-content-end"
					id="navbarDefault"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link js-scroll active" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll" href="/About">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll" href="/Services">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll" href="/Portfolio">
								Works
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll" href="Blog">
								Blog
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll" href="/Contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
