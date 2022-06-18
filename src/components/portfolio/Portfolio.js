import React from "react";
import BreadCrumb from "../layout/BreadCrumb";

const Portfolio = () => {
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
							<h2 className="intro-title mb-4">My Portfolio </h2>
							<BreadCrumb />
						</div>
					</div>
				</div>
			</div>
			<section id="work" className="portfolio-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Portfolio</h3>
								<p className="subtitle-a">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="work-box">
								<a href="images/work-1.jpg" data-lightbox="gallery-mf">
									<div className="work-img">
										<img src="images/work-1.jpg" alt="" className="img-fluid" />
									</div>
									<div className="work-content">
										<div className="row">
											<div className="col-sm-8">
												<h2 className="w-title">Lorem impsum dolor</h2>
												<div className="w-more">
													<span className="w-ctegory">Web Design</span> /
													<span className="w-date">18 Sep. 2018</span>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="w-like">
													<span className="ion-ios-plus-outline"></span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="images/work-2.jpg" data-lightbox="gallery-mf">
									<div className="work-img">
										<img src="images/work-2.jpg" alt="" className="img-fluid" />
									</div>
									<div className="work-content">
										<div className="row">
											<div className="col-sm-8">
												<h2 className="w-title">Loreda Cuno Nere</h2>
												<div className="w-more">
													<span className="w-ctegory">Web Design</span> /
													<span className="w-date">18 Sep. 2018</span>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="w-like">
													<span className="ion-ios-plus-outline"></span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="images/work-3.jpg" data-lightbox="gallery-mf">
									<div className="work-img">
										<img src="images/work-3.jpg" alt="" className="img-fluid" />
									</div>
									<div className="work-content">
										<div className="row">
											<div className="col-sm-8">
												<h2 className="w-title">Mavrito Lana Dere</h2>
												<div className="w-more">
													<span className="w-ctegory">Web Design</span> /
													<span className="w-date">18 Sep. 2018</span>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="w-like">
													<span className="ion-ios-plus-outline"></span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="images/work-4.jpg" data-lightbox="gallery-mf">
									<div className="work-img">
										<img src="images/work-4.jpg" alt="" className="img-fluid" />
									</div>
									<div className="work-content">
										<div className="row">
											<div className="col-sm-8">
												<h2 className="w-title">Bindo Laro Cado</h2>
												<div className="w-more">
													<span className="w-ctegory">Web Design</span> /
													<span className="w-date">18 Sep. 2018</span>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="w-like">
													<span className="ion-ios-plus-outline"></span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="images/work-5.jpg" data-lightbox="gallery-mf">
									<div className="work-img">
										<img src="images/work-5.jpg" alt="" className="img-fluid" />
									</div>
									<div className="work-content">
										<div className="row">
											<div className="col-sm-8">
												<h2 className="w-title">Studio Lena Mado</h2>
												<div className="w-more">
													<span className="w-ctegory">Web Design</span> /
													<span className="w-date">18 Sep. 2018</span>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="w-like">
													<span className="ion-ios-plus-outline"></span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="images/work-6.jpg" data-lightbox="gallery-mf">
									<div className="work-img">
										<img src="images/work-6.jpg" alt="" className="img-fluid" />
									</div>
									<div className="work-content">
										<div className="row">
											<div className="col-sm-8">
												<h2 className="w-title">Studio Big Bang</h2>
												<div className="w-more">
													<span className="w-ctegory">Web Design</span> /
													<span className="w-date">18 Sep. 2017</span>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="w-like">
													<span className="ion-ios-plus-outline"></span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
