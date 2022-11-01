import EmblaCarousel from "embla-carousel";

import HeroBanner from "components/Homepage/HeroBanner/HeroBanner";
import BelowBanner from "components/Homepage/BelowBanner/BelowBanner";



const Home = () => {

   const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
  prevBtn.addEventListener('click', embla.scrollPrev, false);
  nextBtn.addEventListener('click', embla.scrollNext, false);
};

 const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
    else prevBtn.setAttribute('disabled', 'disabled');

    if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
    else nextBtn.setAttribute('disabled', 'disabled');
  };
};


  
  const setupEmblaCarousel = (emblaNode, options) => {
    const viewPort = emblaNode.querySelector(".embla__viewport");
    const prevBtn = emblaNode.querySelector(".embla__button--prev");
    const nextBtn = emblaNode.querySelector(".embla__button--next");
    const embla = EmblaCarousel(viewPort, options);
    const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
  
    setupPrevNextBtns(prevBtn, nextBtn, embla);
  
    embla.on("select", disablePrevAndNextBtns);
    embla.on("init", disablePrevAndNextBtns);
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
         </main>
     );
}
 
export default Home;