import React, { useState } from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./Slider.scss";

const Slider = () => {
	const [slide, setSlide] = useState(0);
	const prevSlide = () => {
		setSlide(slide === 0 ? 2 : slide - 1);
	};
	const nextSlide = () => {
		setSlide(slide === 2 ? 0 : slide + 1);
	};

	const data = [
		"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
	];

	return (
		<div className="slider">
			<div
				className="container"
				style={{ transform: `translateX(-${slide * 100}vw)` }}
			>
				<img src={data[0]} alt="" />
				<img src={data[1]} alt="" />
				<img src={data[2]} alt="" />
			</div>
			<div className="icons">
				<div className="icon" onClick={prevSlide}>
					<WestOutlinedIcon />
				</div>
				<div className="icon" onClick={nextSlide}>
					<EastOutlinedIcon />
				</div>
			</div>
		</div>
	);
};

export default Slider;
