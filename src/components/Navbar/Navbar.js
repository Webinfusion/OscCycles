import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";

import Drawer from "@mui/material/Drawer";

const navElements = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About Us",
        link:"/about-us"
    },
    {
        name:"Products",
        link:"/products"
    },
    {
        name:"Dealers",
        link:"/dealers"
    },
]

const Navbar = () => {

    const [drawer,setDrawer] =useState(false);

    const navRight =() =>{
        return(
            <div className="navRight">
                {navElements.map(row =>{
                    return <a key={row.link} className="navLinkElement" href={row.link}>{row.name}</a>
                })}
                {/* <a href="tel:+91-95389-36616"><div className="helpline"></div></a> */}
                <div className="navButtons">
                    <button className="navWhatsappBtn">Whatsapp</button>
                    <button className="navContactUsBtn">Contact Us</button>
                </div>
            </div> 
        )
    }  

    return (
            <Box component='nav' className="Navbar" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} position={{xs:"fixed",md:'static'}}>
                <div className="insideNav">
                    <div className="navLeft">
                        <Link to="/"><img src="./images/CompanyLogo.svg" alt="" className="compLogo" /></Link>
                    </div>
                   
                    <IconButton aria-label="delete" onClick={() =>setDrawer(!drawer)} 
                        sx={{display:{xs:'block',md:'none'},width:'50px',height:'50px',alignSelf:'center'}}>
                            <MenuIcon />
                    </IconButton>
                    <div className="navRightDesktop">
                        {navRight()}
                    </div>
                    
                    
                </div>
                <Drawer
                    anchor='right'
                    variant="temporary"
                    open={drawer}
                    onClose={()=>setDrawer(false)}
                >
                    <Box height={100} />
                    {navRight()}
                
                </Drawer>
            </Box>
      );
}
 
export default Navbar;