import "./testimonials.css";

import { useEffect } from "react";

import { testimonialData } from "assets/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Item = (props) => {
	const data = props.data;
	return (
		<div className="testimonialItem">
			<div className="testimonialImgDiv">
				<img className="testimonialImg" src={`images/TestimonialImages/${data.imgName}`} alt="" />
			</div>
			<summary className="testimonialText">{`"${data.text}"`}</summary>
			<h6 className="testimonialName">~{data.name}</h6>
		</div>
	);
};

const Testimonials = () => {
	const [emblaRef, embla] = useEmblaCarousel(
		{
			dragFree: true,
			slidesToScroll: 1,
			containScroll: "trimSnaps",
		},
		[Autoplay()]
	);

	return (
		<section className="testimonials">
			<h4 className="homeSectionsHead">Testimonials</h4>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{testimonialData.map((row) => (
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
};

export default Testimonials;
