import "./testimonials.css";

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
                <button className="embla__button embla__button--prev " type="button">Heee</button>
            <button className="embla__button embla__button--next" type="button">Hee</button> 
            </div>
            
           
            
        </section>
        );
}
 
export default Testimonials;