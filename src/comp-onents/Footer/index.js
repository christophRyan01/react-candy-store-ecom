import React from 'react'
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    SocialMedia,
    SocialMediaWrap, 
    SocialLogo, 
    SocialIcons, 
    SocialIconLink } from './FooterElements'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
               <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Candy</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Facebook" 
                                rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Twitter"
                                rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink 
                                href='//www.linkedin.com/in/christopher-gotschall-softwareengineer/@blank' 
                                target="_blank"
                                aria-label="Linkedin"
                                rel="noopener noreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}
