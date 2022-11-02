import "./testimonials.css";
import emblaCarousel from "embla-carousel";

import { testimonialData } from "assets/data";

export const Item =(props) =>{
    const data =props.data;
    return (
        <div className="testimonialItem">
            <div className="testimonialImgDiv">
                <img  className="testimonialImg" src={`images/TestimonialImages/${data.imgName}`} alt="" />
            </div>
            <summary className="testimonialText">{`"${data.text}"`}</summary>
            <h6 className="testimonialName">~{data.name}</h6>
        </div>
    );
}

const Testimonials = () => {


    const carouselOptions = {
        loop: true,
        dragFree: true,
        containScroll: "trimSnaps",
        // align: "center"
      };

      window.onload =() =>{
        const emblaNode = document.querySelector(".embla");
        console.log(emblaNode);
          const viewPortNode = emblaNode.querySelector(".embla__viewport");
          const embla = emblaCarousel(viewPortNode, carouselOptions);
      }
      
    
    

    return ( 
        <section className="testimonials">
            <h4 className="testimonialHead">Testimonials</h4>
            <div className="embla">
                <div className="embla__viewport" >
                    <div className="embla__container">
                        {testimonialData.map(row =>(
                            <div className="embla__slide" key={row.imgName}>
                                <div className="embla__slide__inner">
                                    <Item data={row} key={row.id} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  
                
            </div>
            
           
            
        </section>
        );
}
 
export default Testimonials;