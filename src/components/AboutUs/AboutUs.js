import { Typography } from "@mui/material";
import "./aboutus.css";

const Aboutus = () => {
	return (
		<main className="aboutusPage">
			<Typography component="h2" variant="h3" className="aboutusPageHead" fontWeight={600} textAlign="center">
				About Us
			</Typography>
			<Typography className="aboutusDescription" pt={2} fontSize={18}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum cumque amet ad laudantium error
				repellat doloremque architecto in velit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Voluptas harum cumque amet ad laudantium error repellat doloremque architecto in velit.
			</Typography>
			<div className="aboutusPageMain">
				<div className="aboutUsImageDiv mobileOff">
					<img src="/images/Homepage/Aboutusimg.png" className="aboutusimg" />
				</div>
				<div className="aboutusText">
					<h3 className="aboutusPageHead">Assuring best quality </h3>
					<p className="aboutusDescription">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum cumque amet ad
						laudantium error repellat doloremque architecto in velit.
					</p>

					<div className="aboutusSubtext">
						<div>
							<h3>13+</h3>
							<p className="aboutusDescription">Dealers across Karnataka</p>
						</div>

						<div>
							<h3>500+</h3>
							<p className="aboutusDescription">Satisfied Customers in 5 months</p>
						</div>
					</div>
				</div>
				<div className="aboutUsImageDiv mobileOn">
					<img src="/images/Homepage/Aboutusimg.png" className="aboutusimg" />
				</div>
			</div>
		</main>
	);
};

export default Aboutus;
