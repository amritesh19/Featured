import React from 'react';
import { 
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarWrapper,
    SideBarLink,
    SideBtn,
    SideBtnLink
 } from './sideBar.styles';


const SideBar = ({ user, isOpen, toggle }) => {
    return ( 
        <SideBarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/movies" onClick={toggle}>Movies</SideBarLink>
                    <SideBarLink to="/ideas" onClick={toggle}>Ideas</SideBarLink>
                    <SideBarLink to="/guide" onClick={toggle}>Guide</SideBarLink>
                    {!user && (
                    <React.Fragment>
                    <SideBarLink to="/login" onClick={toggle}>Login</SideBarLink>
                    <SideBtn>
                    <SideBtnLink to="/register" onClick={toggle}>Register</SideBtnLink>
                    </SideBtn>
                    </React.Fragment>
                    )}
                    {user && (
                    <React.Fragment>
                    <SideBarLink to="/profile" onClick={toggle}>{user.name}</SideBarLink>
                    <SideBtn>
                    <SideBtnLink to="/logout" onClick={toggle}>Logout</SideBtnLink>
                    </SideBtn>
                    </React.Fragment>
                    )}
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
     );
}
 
export default SideBar;
