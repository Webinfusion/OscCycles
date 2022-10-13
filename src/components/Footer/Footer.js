import "./footer.css";
import CompanyLogo from "images/CompanyLogo";
import HelplineLogo from "images/Helpline";
import { Link } from "react-router-dom";
const Footer = (props) => {
    const head =props.head;
    const elements=props.elements;

    return (
        <footer className="big-footer">
        <div className="footerPhoto-grid">

            {head && head.map(row =>{
                const category = row.fields.name;
                const categoryValue =row.fields.value;
                const totalNo =elements.filter(row => row.fields.categoryName == categoryValue);

                return <div  key={row.id} 
                            className={`footerCard ${totalNo.length <= 5 && 'footerCard-tall'} ${totalNo.length <= 9 && 'footerCard-tall1'} ${totalNo.length > 9 && 'footerCard-tall2'}`}>
                            <p className="footerHeading">{category}</p>
                            <div className="footerColumn"> 
                            {elements && elements.map(row =>{

                               if(row.fields.categoryName == categoryValue )
                                 return <a key={row.id} href={`/${categoryValue}?scrollTo=${row.fields.value}`} className="footerValues" >
                                            {row.fields.name}
                                        </a>
                            })}  
                            </div> 
                        </div>
            })}
            

        </div>
        <div className="copyrights">
        <h3>&copy; 2022  Sankanur Hospital and Research Center | <a  href="./privacypolicy"> Privacy policy.</a></h3> <h3>- Powered by <a  href="#"> webinfusion</a></h3>
      </div>
    </footer>
      );
}
 
export default Footer;