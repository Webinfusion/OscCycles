import "./footer.css";

import { navElements } from "assets/data";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {

    const formSubmit =(e) =>{
      e.preventDefault();
    }

    return (
      <footer className="footer">
        <div className="topFooter">

            <div className="topFooterLeft">
                <h3 className="footerHead">Old School Chopper</h3>
                <span className="footerDescription">&ldquo; The safe ride to your kids.&rdquo; </span>
                <div className="footerLinks">
                  {navElements.map(row =>{
                          return <a key={row.link} className="footerLinkElement" href={row.link}>{row.name}</a>
                  })}
                </div>
                <div className="footerMapSection">
                  <iframe className="mapIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7621.013547768756!2d75.12901709478447!3d15.356581664057202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7280dda3a4b%3A0x9b15f81212329a4c!2sPlash%20Swimming%20Pool!5e0!3m2!1sen!2sin!4v1667307909249!5m2!1sen!2sin"  style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  <div className="footerContactInfo">
                    <ListItemButton href="tel:+91-95389-36616">
                        <ListItemIcon>
                          <LocalPhoneIcon sx={{color:"white"}} fontSize="large"  />
                        </ListItemIcon>
                        <ListItemText primary="+91 98765 89565" sx={{color:"var(--greyText)"}} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                          <LocationOnIcon sx={{color:"white"}} fontSize="large"  />
                        </ListItemIcon>
                        <ListItemText primary="Near SDM Engineering College, Rajivgandhinagar, Dharwad, Karnataka 580002" 
                          sx={{color:"var(--greyText)"}} />
                    </ListItemButton>
                  </div>
                </div>
            </div>

            <form  onSubmit={formSubmit} className="topFooterRight">
              <p className="footerFormHead">Lets&apos;s connect !!</p> 
              <div className="footerFormInputs">
                <label htmlFor="Name" className="footerFormLabel"  >Name</label>
                <input type="text" placeholder="Enter your name" name="Name" className="footerFormInput"  />
              </div>
              <div className="footerFormInputs">
                <label htmlFor="Phone"  className="footerFormLabel">Enter Phone No</label>
                <input type="tel" placeholder="Enter your Phone No." name="Phone" className="footerFormInput" />
              </div>
              <div className="footerFormInputs">
                <label htmlFor="Message" className="footerFormLabel" >Write to us</label>
                <textarea type="text" className="footerFormInput"  placeholder="Start here" name="Message" multiple  />
              </div>
              <button className="gradientBtn footerFormBtn" type="submit">Send</button>
            </form>

        </div>
        <div className="copyrightsFooter">
          <span className="copyrightsText">© 2022-2023 Old school chopper  | <a href="/privacypolicy">Privacy policy.</a> - Powered by <a href="*">webinfusion</a></span>
        </div>
            
      </footer>
      );
}
 
export default Footer;