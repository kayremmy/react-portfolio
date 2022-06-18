import React from "react";
import { useState } from "react";

const Slider = () => {
	const [name] = useState("Kay Remmy");

	return (
		<div
			id="home"
			className="intro route bg-image"
			style={{ backgroundImage: `url(images/four.jpg)` }}
		>
			<div className="overlay-itro"></div>
			<div className="intro-content display-table">
				<div className="table-cell">
					<div className="container">
						<p className="display-6 color-d">Hello, world!</p>
						<h1 className="intro-title mb-4">{name}</h1>
						<p className="intro-subtitle">
							<span className="text-slider-items">
								CEO DevFolio,Web Developer,Web Designer,Frontend
								Developer,Graphic Designer
							</span>
							<strong className="text-slider"></strong>
						</p>
						<p className="pt-3">
							<a
								className="btn btn-primary btn js-scroll px-4"
								href="#about"
								role="button"
							>
								Learn More
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
