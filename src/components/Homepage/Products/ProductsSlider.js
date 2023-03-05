import "./productsSlider.css";

import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Typography } from "@mui/material";

const Item = (props) => {
	const data = props.data;
	var imgUrl;
	data.thumbnail &&
		data.thumbnail.map((row) => {
			imgUrl = row.url;
		});

	return (
		<div className="productItem ">
			<img src={imgUrl} className="productItemImage" />
			<h3 className="productItemHead">{data.displayName}</h3>
			<Typography
				className="productItemText"
				sx={{
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "-webkit-box",
					WebkitLineClamp: "2",
					WebkitBoxOrient: "vertical",
				}}>
				{data.description}
			</Typography>
			<button className="productItemBtn">Get Quote</button>
		</div>
	);
};

const ProductsSlider = ({ products }) => {
	const [emblaRef, embla] = useEmblaCarousel(
		{
			dragFree: true,
			slidesToScroll: 1,
			containScroll: "trimSnaps",
		},
		[Autoplay()]
	);

	return (
		<div className="homeProducts">
			<h1 className="homeSectionsHead">Popular Products</h1>
			<div className="allProductItems">
				{products && (
					<div className="embla">
						<div className="embla__viewport" ref={emblaRef}>
							<div className="embla__container">
								{products.map((row) => {
									return (
										<div className="embla__slide" key={row.id}>
											<div className="embla__slide__inner">
												<Item data={row.fields} />
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				)}

				{!products && <CircularProgress sx={{ mt: 10 }} />}
			</div>
		</div>
	);
};

export default ProductsSlider;
