import "./navbar.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Box from "@mui/material/Box";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";

import Drawer from "@mui/material/Drawer";

import { navElements } from "assets/data";

const Navbar = () => {

    const [drawer,setDrawer] =useState(false);
    const [isScrolled,setIsScrolled] =useState(false);

    window.onscroll =() =>{
        if(window.scrollY <=200)  setIsScrolled(false);
        else setIsScrolled(true);
    }            
    
    

    const navRight =() =>{
        return(
            <div className={isScrolled === true ? "navRight navRightScrolled" :"navRight"}>
                {navElements.map(row =>{
                    return <a key={row.link} 
                                className={`${isScrolled === true ? "navLinkElement navLinkElementScrolled" :"navLinkElement" } 
                                            ${window.location.pathname === row.link ? isScrolled === true ? " navLinkElementScrolledActive " : "navLinkElementActive" : '' }` }
                                href={row.link}>
                                {row.name}
                            </a>
                })}
                {/* <a href="tel:+91-95389-36616"><div className="helpline"></div></a> */}
                <div className="navButtons">
                    <button className={isScrolled === true ? "navWhatsappBtn navWhatsappBtnScrolled" :"navWhatsappBtn"}>Whatsapp</button>
                    <button className={isScrolled === true ? "navContactUsBtn navContactUsBtnScrolled " :"navContactUsBtn"}>Contact Us</button>
                </div>
            </div> 
        )
    }  

    return (
            <Box component='header' className={isScrolled === true ? "Navbar navScrolled" :"Navbar"} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} position="fixed">
                <nav className="insideNav">
                        <Link to="/" className="navLeft"><img src="./images/CompanyLogo.svg" alt="" 
                            className={isScrolled === true ? "compLogo compLogoScrolled" :"compLogo"} />
                        </Link>
                   
                    <IconButton aria-label="delete" onClick={() =>setDrawer(!drawer)} 
                        sx={{display:{xs:'block',md:'none'},width:'50px',height:'50px',alignSelf:'center'}}>
                            <MenuIcon sx={{color:isScrolled === true && "#FFFFFF"}} />
                    </IconButton>
                    <div className="navRightDesktop">
                        {navRight()}
                    </div>
                    
                    
                </nav>
                <Drawer
                    
                    anchor='right'
                    variant="temporary"
                    open={drawer}
                    onClose={()=>setDrawer(false)}
                >
                    <Box height={80} />
                    {navRight()}
                
                </Drawer>
            </Box>
      );
}
 
export default Navbar;