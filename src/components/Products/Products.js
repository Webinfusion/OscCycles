import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import "./products.css";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const Products = ({ products, categoryData }) => {
	const [value, setValue] = useState("All");
	const [filteredProducts, setFilteredProducts] = useState(products);
	useEffect(() => {
		if (!filteredProducts) setFilteredProducts(products);
	}, [products]);

	const handleFilteSelectChange = (e) => {
		console.log(e.target.value);
		if (products)
			if (e.target.value !== "All")
				setFilteredProducts(products.filter((row) => row.fields.category == e.target.value));
			else setFilteredProducts(products);
	};

	return (
		<div className="products">
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h4"> Products</Typography>
				<Select value={value} onChange={handleFilteSelectChange} sx={{ width: "250px" }}>
					<MenuItem value="All">All</MenuItem>
					{categoryData &&
						categoryData.map((row) => {
							return (
								<MenuItem value={row.fields.value} key={row.id}>
									{row.fields.displayName}
								</MenuItem>
							);
						})}
				</Select>
			</Stack>
			<Box mt={5} />
			{filteredProducts ? (
				<Box display="flex" rowGap={4} columnGap={2} flexWrap="wrap">
					{filteredProducts.map((row) => {
						return <Item data={row.fields} key={row.id} />;
					})}
				</Box>
			) : (
				<div style={{ margin: "auto", width: "50px", padding: "40px" }}>
					<CircularProgress />
				</div>
			)}
		</div>
	);
};

export default Products;

const Item = (props) => {
	const data = props.data;
	var imgUrl;
	data.thumbnail &&
		data.thumbnail.map((row) => {
			imgUrl = row.url;
		});

	return (
		<div className="productPageItem ">
			<img src={imgUrl} className="productItemImage" />
			<h3 className="productItemHead">{data.displayName}</h3>
			<Typography
				className="productPageItemText"
				sx={{
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "-webkit-box",
					WebkitLineClamp: "3",
					WebkitBoxOrient: "vertical",
				}}>
				{data.description}
			</Typography>
			<button className="productItemBtn">Get Quote</button>
		</div>
	);
};
