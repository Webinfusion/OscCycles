import "./aboutUsHome.css";

const AboutUsHome = () => {
	return (
		<div className="aboutusMain">
			<div className="aboutUsImageDiv mobileOff">
				<img src="./images/Homepage/Aboutusimg.png" className="aboutusimg" />
			</div>
			<div className="aboutusText">
				<h3 className="aboutusHead">ABOUT US</h3>
				<p className="aboutusDescription">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum cumque amet ad laudantium
					error repellat doloremque architecto in velit.
				</p>

				<div className="aboutusSubtext">
					<div>
						<h3>13+</h3>
						<p>Dealers across Karnataka</p>
					</div>

					<div>
						<h3>500+</h3>
						<p>Satisfied Customers in 5 months</p>
					</div>
				</div>
			</div>
			<div className="aboutUsImageDiv mobileOn">
				<img src="./images/Homepage/Aboutusimg.png" className="aboutusimg" />
			</div>
		</div>
	);
};

export default AboutUsHome;
