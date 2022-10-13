import "./navbar.css";
import CompanyLogo from "images/CompanyLogo";
import HelplineLogo from "images/Helpline";
import Logo from "images/FinalLogo.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";

import { Drawer } from "@mui/material";

const Navbar = (props) => {
    // sorting data
    const data=props.data.sort((a, b) => a.fields.timeUnix > b.fields.timeUnix ? 1 : -1)

    const [drawer,setDrawer] =useState(false);

    const navElements =() =>{
        return <Box className="navElements">
            {data && data.map((row) =>{
                return <a  key={row.id}
                            onClick={() => setDrawer(false)}
                            href={`/${row.fields.value}`}
                            className="part2Element">{row.fields.name}</a>

            })}
        </Box>
    }

    return (
        <Box className="Navbar" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} position={{xs:"fixed",md:'static'}}>
            <div className="part1">
                <div className="left">
                    <Link to="/"><img src={Logo} alt="" className="compLogo" /></Link>
                </div>
                <div className="right">
                    <a href="tel:+91-95389-36616"><div className="helpline"><HelplineLogo /></div></a>
                    <IconButton aria-label="delete" onClick={() =>setDrawer(!drawer)} sx={{display:{xs:'block',md:'none'}}}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </div> 
            
            <div className="part2">
                {navElements()}
                
              
            </div> 

            <Drawer
                anchor='right'
                variant="temporary"
                open={drawer}
                onClose={()=>setDrawer(false)}
            >
                <Box height={100} />
                {navElements()}
               
            </Drawer>
        </Box>
      );
}
 
export default Navbar;