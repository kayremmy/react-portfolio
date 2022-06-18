import React from "react";

const SideBar = () => {
	return (
		<div className="col-md-4">
			<div className="widget-sidebar sidebar-search">
				<h5 className="sidebar-title">Search</h5>
				<div className="sidebar-content">
					<form>
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Search for..."
								aria-label="Search for..."
							/>
							<span className="input-group-btn">
								<button className="btn btn-secondary btn-search" type="button">
									<span className="ion-android-search"></span>
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
			<div className="widget-sidebar">
				<h5 className="sidebar-title">Recent Post</h5>
				<div className="sidebar-content">
					<ul className="list-sidebar">
						<li>
							<a href="/#">Atque placeat maiores.</a>
						</li>
						<li>
							<a href="/#">Lorem ipsum dolor sit amet consectetur</a>
						</li>
						<li>
							<a href="/#">Nam quo autem exercitationem.</a>
						</li>
						<li>
							<a href="/#">Atque placeat maiores nam quo autem</a>
						</li>
						<li>
							<a href="/#">Nam quo autem exercitationem.</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="widget-sidebar">
				<h5 className="sidebar-title">Archives</h5>
				<div className="sidebar-content">
					<ul className="list-sidebar">
						<li>
							<a href="/#">September, 2017.</a>
						</li>
						<li>
							<a href="/#">April, 2017.</a>
						</li>
						<li>
							<a href="/#">Nam quo autem exercitationem.</a>
						</li>
						<li>
							<a href="/#">Atque placeat maiores nam quo autem</a>
						</li>
						<li>
							<a href="/#">Nam quo autem exercitationem.</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="widget-sidebar widget-tags">
				<h5 className="sidebar-title">Tags</h5>
				<div className="sidebar-content">
					<ul>
						<li>
							<a href="/#">Web.</a>
						</li>
						<li>
							<a href="/#">Design.</a>
						</li>
						<li>
							<a href="/#">Travel.</a>
						</li>
						<li>
							<a href="/#">Photoshop</a>
						</li>
						<li>
							<a href="/#">Corel Draw</a>
						</li>
						<li>
							<a href="/#">JavaScript</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
