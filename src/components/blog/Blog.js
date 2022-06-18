import React from "react";
import BreadCrumb from "../layout/BreadCrumb";

const Blog = () => {
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
							<h2 className="intro-title mb-4">Blog Posts </h2>
							<BreadCrumb />
						</div>
					</div>
				</div>
			</div>
			<section id="blog" className="blog-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Blog</h3>
								<p className="subtitle-a">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<a href="/BlogDetails">
										<img src="images/post-1.jpg" alt="" className="img-fluid" />
									</a>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Travel</h6>
										</div>
									</div>
									<h3 className="card-title">
										<a href="/BlogDetails">See more ideas about Travel</a>
									</h3>
									<p className="card-description">
										Proin eget tortor risus. Pellentesque in ipsum id orci porta
										dapibus. Praesent sapien massa, convallis a pellentesque
										nec, egestas non nisi.
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="/BlogDetails">
											<img
												src="images/testimonial-2.jpg"
												alt=""
												className="avatar rounded-circle"
											/>
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="ion-ios-clock-outline"></span> 10 min
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<a href="/BlogDetails">
										<img src="images/post-2.jpg" alt="" className="img-fluid" />
									</a>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Web Design</h6>
										</div>
									</div>
									<h3 className="card-title">
										<a href="/BlogDetails">See more ideas about Travel</a>
									</h3>
									<p className="card-description">
										Proin eget tortor risus. Pellentesque in ipsum id orci porta
										dapibus. Praesent sapien massa, convallis a pellentesque
										nec, egestas non nisi.
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="/BlogDetails">
											<img
												src="images/testimonial-2.jpg"
												alt=""
												className="avatar rounded-circle"
											/>
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="ion-ios-clock-outline"></span> 10 min
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<a href="/BlogDetails">
										<img src="images/post-3.jpg" alt="" className="img-fluid" />
									</a>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Web Design</h6>
										</div>
									</div>
									<h3 className="card-title">
										<a href="/BlogDetails">See more ideas about Travel</a>
									</h3>
									<p className="card-description">
										Proin eget tortor risus. Pellentesque in ipsum id orci porta
										dapibus. Praesent sapien massa, convallis a pellentesque
										nec, egestas non nisi.
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="/BlogDetails">
											<img
												src="images/testimonial-2.jpg"
												alt=""
												className="avatar rounded-circle"
											/>
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="ion-ios-clock-outline"></span> 10 min
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Blog;
