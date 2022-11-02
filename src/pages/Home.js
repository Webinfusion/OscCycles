import EmblaCarousel from "embla-carousel";

import HeroBanner from "components/Homepage/HeroBanner/HeroBanner";
import BelowBanner from "components/Homepage/BelowBanner/BelowBanner";
import Testimonials from "components/Homepage/Testimonials/Testimonials";
import Products from "components/Homepage/Products/Products";
import Aboutus from "components/Homepage/Aboutus/Aboutus";
import Ourcategories from "components/Homepage/Ourcategories/Ourcategories";



const Home = () => {

  

    return ( 
         <main>
           <HeroBanner />
           <Products />
           <Aboutus />
           <Ourcategories />
           <BelowBanner />
           <Testimonials />
         </main>
     );
}
 
export default Home;




    
