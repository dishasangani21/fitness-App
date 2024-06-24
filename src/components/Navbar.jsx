import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../assets/images/FitnessLogoTra.png";
import "./style/NavBar.css";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent ="space-around" sx={{gap : {sm:'122px' , xs:"40px"},mt:{sm:'20px' ,xs:'20px'} , justifyContent :'none'}}
      px="20px"
    >
      <Stack
        direction="row"
        gap="40px"
        fontSize={"24px"}
        alignItems = "flex-end"

      >
     
        <img src={logo} alt="logo"  style={{
          width : '80px' , height : '80px' ,margin : '0 20px'
        }}/>
        <Link to="/" style={{textDecoration : 'none', fontSize :'20px', color : '#3A1212' , borderBottom : '4px solid #FF2625' , paddingBottom : '10px'}}>Home</Link>
        <a href="#exercises" style={
          {
            textDecoration : 'none' , fontSize :'20px', color:'#3A1212',paddingBottom : '10px'
          }}>Exercises</a>
      </Stack>
    </Stack>

    
  );
};

export default Navbar;
