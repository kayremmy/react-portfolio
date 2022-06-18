import React from "react";
import BreadCrumb from "../layout/BreadCrumb";

const Services = () => {
	return (
		<>
			<div
				className="intro intro-single route bg-image"
				style={{ backgroundImage: `url(images/overlay-bg.jpg)` }}
			>
				<div className="overlay-mf"></div>
				<div className="intro-content display-table">
					<div className="table-cell">
						<div className="container">
							<h2 className="intro-title mb-4">Our Services </h2>
							<BreadCrumb />
						</div>
					</div>
				</div>
			</div>
			<section id="service" className="services-mf route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Services</h3>
								<p className="subtitle-a">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-monitor"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Design</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magni adipisci eaque autem fugiat! Quia, provident vitae!
										Magni tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-code-working"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Development</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magni adipisci eaque autem fugiat! Quia, provident vitae!
										Magni tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-camera"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Photography</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magni adipisci eaque autem fugiat! Quia, provident vitae!
										Magni tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-android-phone-portrait"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Responsive Design</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magni adipisci eaque autem fugiat! Quia, provident vitae!
										Magni tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-paintbrush"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Graphic Design</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magni adipisci eaque autem fugiat! Quia, provident vitae!
										Magni tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-stats-bars"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Marketing Services</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magni adipisci eaque autem fugiat! Quia, provident vitae!
										Magni tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
