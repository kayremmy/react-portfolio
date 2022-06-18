import React from "react";

const BreadCrumb = () => {
	return (
		<ol className="breadcrumb d-flex justify-content-center">
			<li className="breadcrumb-item">
				<a href="/">Home</a>
			</li>
			<li className="breadcrumb-item active">Data</li>
		</ol>
	);
};

export default BreadCrumb;
