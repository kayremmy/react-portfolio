import React from "react";
import Loader from "./Loader";

function Footer() {
	return (
		<>
			<section
				className="paralax-mf footer-paralax bg-image sect-mt4 route"
				style={{ backgroundImage: `url(images/overlay-bg.jpg)` }}
			>
				<div className="overlay-mf"></div>
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="copyright-box">
									<p className="copyright">
										&copy; Copyright <strong>Kayremmy</strong>. All Rights
										Reserved
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</section>
			<a href="/#" className="back-to-top">
				<i className="fa fa-chevron-up"></i>
			</a>
			<Loader />
		</>
	);
}

export default Footer;
