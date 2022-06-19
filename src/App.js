import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Counter from "./components/counter/Counter";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import BlogDetails from "./components/blog/BlogDetails";
import BreadCrumb from "./components/layout/BreadCrumb";
import SideBar from "./components/layout/SideBar";
import Blog from "./components/blog/Blog";
import Loader from "./components/layout/Loader";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/" element={<Counter />} />
				<Route path="/Portfolio" element={<Portfolio />} />
				<Route path="/" element={<BreadCrumb />} />
				<Route path="/Blog" element={<Blog />} />
				<Route path="/BlogDetails" element={<BlogDetails />} />
				<Route path="/" element={<SideBar />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/" element={<Loader />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
