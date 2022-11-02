import EmblaCarousel from "embla-carousel";

import HeroBanner from "components/Homepage/HeroBanner/HeroBanner";
import BelowBanner from "components/Homepage/BelowBanner/BelowBanner";
import Testimonials from "components/Homepage/Testimonials/Testimonials";



const Home = () => {

  
  const setupEmblaCarousel = (emblaNode, options) => {
    const viewPort = emblaNode.querySelector(".embla__viewport");
    const embla = EmblaCarousel(viewPort, options);
    
  
  };
  
  const options = {dragFree : true,containScroll: "trimSnaps" };
  const emblaNodes = [].slice.call(document.querySelectorAll(".embla"));
  
  const emblaCarousels = emblaNodes.map(emblaNode =>
    setupEmblaCarousel(emblaNode, options)
  );
  

    return ( 
         <main>
           <HeroBanner />
           <BelowBanner />
           <Testimonials />
         </main>
     );
}
 
export default Home;




    
// const setupEmblaCarousel = (emblaNode, options) => {
//   const viewPort = emblaNode.querySelector(".embla__viewport");
 
//   const embla = EmblaCarousel(viewPort, options);
  
 
// };

// const options = {dragFree : true,containScroll: "trimSnaps" };
// const emblaNodes = [].slice.call(document.querySelectorAll(".embla"));

// const data = emblaNodes.map(emblaNode =>
//   setupEmblaCarousel(emblaNode, options)
// );