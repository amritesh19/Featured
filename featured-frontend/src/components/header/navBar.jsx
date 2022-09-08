import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, 
         NavbarContainer,
         NavLogo,
         MenuIcon,
         Menu,
         MenuItem,
         NavLinks,
         NavBtn,
         NavBtnLink
 } from './navBar.styles';

const NavBar = ({ user, toggle }) => {
    const [scrollnav, setScrollnav] = useState(false);

    const changenav = ()=>{
      if(window.scrollY >= 50)
        setScrollnav(true);
      else setScrollnav(false);
    }

    useEffect(() => {
      window.addEventListener('scroll', changenav);
    }, []);

    return ( 
      
      <Nav scrollnav={scrollnav}>
        <NavbarContainer>
          <NavLogo to="/" scrollnav={scrollnav}>featured</NavLogo>
          <MenuIcon onClick={toggle}>
            <FaBars/>
          </MenuIcon>
          <Menu>
            <MenuItem>
              <NavLinks to="/movies" >Movies</NavLinks>
            </MenuItem>
            <MenuItem>
              <NavLinks to="/ideas" >Ideas</NavLinks>
            </MenuItem>
            <MenuItem>
              <NavLinks to="/guide" >Guide</NavLinks>
            </MenuItem>
            </Menu>
            {!user && (
              <Menu>
                <NavBtn>
                  <NavLinks to="/login" >Login</NavLinks>
                </NavBtn>
                <NavBtn>
                  <NavBtnLink to="/register">Register</NavBtnLink>
                </NavBtn>
              </Menu>
            )}
            {user && (
              <Menu>
                <NavBtn>
                  <NavBtnLink to="/profile">{user.name}</NavBtnLink>
                </NavBtn>
                <NavBtn>
                  <NavLinks to="/logout" >Logout</NavLinks>
                </NavBtn>
              </Menu>
            )}
        
        </NavbarContainer>
      </Nav>
     );
}
 
export default NavBar;