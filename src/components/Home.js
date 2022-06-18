import React from "react";
import BlogHome from "./blog/BlogHome";
import Counter from "./counter/Counter";
import Slider from "./layout/Slider";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
	return (
		<>
			<Slider />
			<section id="about" className="about-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="row">
											<div className="col-sm-6 col-md-5">
												<div className="about-img">
													<img
														src="images/testimonial-2.jpg"
														className="img-fluid rounded b-shadow-a"
														alt=""
													/>
												</div>
											</div>
											<div className="col-sm-6 col-md-7">
												<div className="about-info">
													<p>
														<span className="title-s">Name: </span>
														<span>Morgan Freeman</span>
													</p>
													<p>
														<span className="title-s">Profile: </span>
														<span>full stack developer</span>
													</p>
													<p>
														<span className="title-s">Email: </span>
														<span>contact@example.com</span>
													</p>
													<p>
														<span className="title-s">Phone: </span>
														<span>(617) 557-0089</span>
													</p>
												</div>
											</div>
										</div>
										<div className="skill-mf">
											<p className="title-s">Skill</p>
											<span>HTML</span> <span className="pull-right">85%</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "85%" }}
													aria-valuenow="85"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
											<span>CSS3</span> <span className="pull-right">75%</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "75%" }}
													aria-valuenow="75"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
											<span>PHP</span> <span className="pull-right">50%</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "50%" }}
													aria-valuenow="50"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
											<span>JAVASCRIPT</span>{" "}
											<span className="pull-right">90%</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "90%" }}
													aria-valuenow="90"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-me pt-4 pt-md-0">
											<div className="title-box-2">
												<h5 className="title-left">About me</h5>
											</div>
											<p className="lead">
												Curabitur non nulla sit amet nisl tempus convallis quis
												ac lectus. Curabitur arcu erat, accumsan id imperdiet
												et, porttitor at sem. Praesent sapien massa, convallis a
												pellentesque nec, egestas non nisi. Nulla porttitor
												accumsan tincidunt.
											</p>
											<p className="lead">
												Mauris blandit aliquet elit, eget tincidunt nibh
												pulvinar a. Vivamus suscipit tortor eget felis porttitor
												volutpat. Vestibulum ac diam sit amet quam vehicula
												elementum sed sit amet dui. porttitor at sem.
											</p>
											<p className="lead">
												Nulla porttitor accumsan tincidunt. Quisque velit nisi,
												pretium ut lacinia in, elementum id enim. Nulla
												porttitor accumsan tincidunt. Mauris blandit aliquet
												elit, eget tincidunt nibh pulvinar a.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
			<Counter />
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
			<Testimonial />
			<BlogHome />
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="contact-mf">
							<div id="contact" className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="title-box-2">
											<h5 className="title-left">Send Message Us</h5>
										</div>
										<div>
											<form action="" method="post" className="contactForm">
												<div id="sendmessage">
													Your message has been sent. Thank you!
												</div>
												<div id="errormessage"></div>
												<div className="row">
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input
																type="text"
																name="name"
																className="form-control"
																id="name"
																placeholder="Your Name"
																data-rule="minlen:4"
																data-msg="Please enter at least 4 chars"
															/>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input
																type="email"
																className="form-control"
																name="email"
																id="email"
																placeholder="Your Email"
																data-rule="email"
																data-msg="Please enter a valid email"
															/>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input
																type="text"
																className="form-control"
																name="subject"
																id="subject"
																placeholder="Subject"
																data-rule="minlen:4"
																data-msg="Please enter at least 8 chars of subject"
															/>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<textarea
																className="form-control"
																name="message"
																rows="5"
																data-rule="required"
																data-msg="Please write something for us"
																placeholder="Message"
															></textarea>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12">
														<button
															type="submit"
															className="button button-a button-big button-rouded"
														>
															Send Message
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div className="col-md-6">
										<div className="title-box-2 pt-4 pt-md-0">
											<h5 className="title-left">Get in Touch</h5>
										</div>
										<div className="more-info">
											<p className="lead">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis dolorum dolorem soluta quidem expedita aperiam
												aliquid at. Totam magni ipsum suscipit amet? Autem nemo
												esse laboriosam ratione nobis mollitia inventore?
											</p>
											<ul className="list-ico">
												<li>
													<span className="ion-ios-location"></span> 329
													WASHINGTON ST BOSTON, MA 02108
												</li>
												<li>
													<span className="ion-ios-telephone"></span> (617)
													557-0089
												</li>
												<li>
													<span className="ion-email"></span>{" "}
													contact@example.com
												</li>
											</ul>
										</div>
										<div className="socials">
											<ul>
												<li>
													<a href="/#">
														<span className="ico-circle">
															<i className="ion-social-facebook"></i>
														</span>
													</a>
												</li>
												<li>
													<a href="/#">
														<span className="ico-circle">
															<i className="ion-social-instagram"></i>
														</span>
													</a>
												</li>
												<li>
													<a href="/#">
														<span className="ico-circle">
															<i className="ion-social-twitter"></i>
														</span>
													</a>
												</li>
												<li>
													<a href="/#">
														<span className="ico-circle">
															<i className="ion-social-pinterest"></i>
														</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
