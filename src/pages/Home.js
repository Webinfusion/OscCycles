import HeroBanner from "components/Homepage/HeroBanner/HeroBanner";
import BelowBanner from "components/Homepage/BelowBanner/BelowBanner";
import Testimonials from "components/Homepage/Testimonials/Testimonials";
import Ourcategories from "components/Homepage/Ourcategories/Ourcategories";
import AboutUsHome from "components/Homepage/Aboutus/AboutUsHome";
import ProductsSlider from "components/Homepage/Products/ProductsSlider";

const Home = ({ categoryData, products }) => {
	return (
		<main>
			<HeroBanner />
			<ProductsSlider products={products} />
			<AboutUsHome />
			<Ourcategories categoryData={categoryData} />
			<BelowBanner />
			<Testimonials />
		</main>
	);
};

export default Home;
