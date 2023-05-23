import React, { useState } from 'react'
import { RightTextDesign, NavbarLinkExtended, NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton } from '../Assets/Wrappers/Header';
import logoimg from '../Assets/Images/logo.png';
import loginimg from '../Assets/Images/login.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [extendedNavbar, setExtendedNavbar] = useState(false)
  return (
    <NavbarContainer extendedNavbar={extendedNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>

            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/Product">Products</NavbarLink>
            <NavbarLink to="/contactUs">ContactUs</NavbarLink>
            <NavbarLink to="/About">About</NavbarLink>
            <OpenLinksButton onClick={() => {
              setExtendedNavbar((curr) => !curr);
            }}> {extendedNavbar ? <> &#10006; </> : <> &#8801; </>}</OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={logoimg}></Logo>
          
           <Link to="/cart"><RightTextDesign>CART</RightTextDesign> </Link> 
          
          <Logo src={loginimg}></Logo>
          
           <Link to="/login"><RightTextDesign>LOGIN</RightTextDesign></Link>  
          

        </RightContainer>
      </NavbarInnerContainer>
      {extendedNavbar &&
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/Product">Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contactUs">ContactUs</NavbarLinkExtended>
          <NavbarLinkExtended to="/About">About</NavbarLinkExtended>

        </NavbarExtendedContainer>
      }


    </NavbarContainer>
  )
}

export default Header
