import "./Ourcategories.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Item = (props) => {
	const data = props.data;
	var imgUrl;
	data.thumbnail &&
		data.thumbnail.map((row) => {
			imgUrl = row.url;
		});

	return (
		<div className="ourcategoriesItem">
			<img src={imgUrl} className="ourcategoriesImage" />
			<div className="ourcategoriesItemRight">
				<h3 className="ourcategoriesItemHead">{data.displayName}</h3>
				<h4 className="ourcategoriesSubHead">Category 1</h4>
				<p className="ourcategoriesText">{data.description}</p>
				<button className="ourcategoriesItemBtn">View more</button>
			</div>
		</div>
	);
};

const Ourcategories = ({ categoryData }) => {
	return (
		<div className="ourcategoriesMain">
			<h1 className="homeSectionsHead">Our Categories</h1>

			<div className="ourcategoriesAll">
				{categoryData &&
					categoryData.map((row) => {
						return <Item data={row.fields} key={row.id} />;
					})}

				{!categoryData && <CircularProgress />}
			</div>
		</div>
	);
};

export default Ourcategories;
