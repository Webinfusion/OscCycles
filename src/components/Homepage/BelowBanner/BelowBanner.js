import './belowbanner.css';



const BelowBanner = () => {
    return ( 
        <div className="belowBannerBg">
            <div className="belowBanner">
                <div className="belowBannerLeft">
                    
                    <div className="belowBannerHead">This bicycle is a great experience for your child</div>
                    <p className="belowBannerDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea ut ducimus laudantium quidem facilis?</p>
                    <button className="gradientBtn belowBannerButton ">Explore More</button>
                </div>
                <div className="belowBannerRight">
                    <img className=" belowBannerImg" src="./images/HomePage/BelowBannerImg.png"  alt ="Cycle Img"/>
                </div>
            </div>
        </div>
     );
}
 
export default BelowBanner;