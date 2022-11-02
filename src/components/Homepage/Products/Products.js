import "./products.css";




const Products = () => {
    return ( 
        <div className="homeProducts">

            <h1 className="productsHead">Popular Products</h1>
             <div className="allProductItems">

            <div className="productItem">
            <img src="./images/Homepage/Rectanglegreen.png" className="productItemImage" />
            <h3 className="productItemHead">Mushyas</h3>
             <p className="productItemText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptatum?</p>
             <button className="productItemBtn">Get Quote</button>
            </div>

            <div className="productItem">
            <img src="./images/Homepage/Rectanglegreen.png" className="productItemImage" />
            <h3 className="productItemHead">Mushyas</h3>
             <p className="productItemText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptatum?</p>
             <button className="productItemBtn">Get Quote</button>
            </div>


            <div className="productItem">
            <img src="./images/Homepage/Rectanglegreen.png" className="productItemImage" />
            <h3 className="productItemHead">Mushyas</h3>
             <p className="productItemText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptatum?</p>
             <button className="productItemBtn">Get Quote</button>
            </div>
           
            </div>
            



        </div>
     );
}
 
export default Products;