import Products from "components/Products/Products";

const ProductsPage = ({ categoryData, products }) => {
	return (
		<main>
			<Products categoryData={categoryData} products={products} />
		</main>
	);
};

export default ProductsPage;
