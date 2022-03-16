import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinkTitle,
    FooterLink,
    FooterLinksItems
} from './footer.styles';

const Footer = () => {
    return ( 
        <FooterContainer>
            <FooterWrap>
                 <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Facebook</FooterLinkTitle>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>LinkedIn</FooterLinkTitle>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Instagram</FooterLinkTitle>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                            <FooterLink to='/login'></FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> 
            </FooterWrap>
        </FooterContainer>
     );
}
 
export default Footer;
