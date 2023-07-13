import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	let counter = 0
	setInterval(() => {
		counter++;
		console.log(counter);
	}, 1500);
	
	return (
		<div className="container vh-100 d-flex align-items-center justify-content-center">
			<div className="row">
			<div className="col-2">{props.num5}</div>
			<div className="col-2">{props.num4}</div>
			<div className="col-2">{props.num3}</div>
			<div className="col-2">{props.num2}</div>
			<div className="col-2">{props.num1}</div>
			</div>
		</div>
	);
};

export default Home;
