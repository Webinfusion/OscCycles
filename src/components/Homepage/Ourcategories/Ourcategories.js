import "./Ourcategories.css";

const Ourcategories = () => {
    return ( 
        <div className="ourcategoriesMain">
             <h1 className="ourcategoriesHead">Our Categories</h1>

            <div className="ourcategoriesAll">
                <div className="ourcategoriesItem">
                    <img src="./images/Homepage/Rectanglegreen.png" className="ourcategoriesImage" />
                    <div className="ourcategoriesItemRight">
                        <h3 className="ourcategoriesItemHead">Mushyas</h3>
                        <h4 className="ourcategoriesSubHead">Category 1</h4>
                        <p className="ourcategoriesText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptatum?</p>
                        <button className="ourcategoriesItemBtn">View more</button>
             
                    </div>
                </div>

                <div className="ourcategoriesItem">
                    <img src="./images/Homepage/Rectanglegreen.png" className="ourcategoriesImage" />

                    <div className="ourcategoriesItemRight">
                        <h3 className="ourcategoriesItemHead">Mushyas</h3>
                        <h4 className="ourcategoriesSubHead">Category 1</h4>
                        <p className="ourcategoriesText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptatum?</p>
                        <button className="ourcategoriesItemBtn">View more</button>
                    </div>
            
                </div>
         </div>

        </div>
     );
}
 
export default Ourcategories;