import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: #fff;
  padding: 4rem 0 2rem;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  font-weight: 700;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.75rem;
  display: block;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  position: relative;
  padding-left: 0;
  
  @media (max-width: 768px) {
    display: inline-block;
    margin: 0 1rem 0.75rem 1rem;
  }
  
  &:hover {
    color: white;
    transform: translateX(3px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.6;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  color: white;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: var(--secondary);
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const LogoText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoContainer>
            <LogoIcon>AI</LogoIcon>
            <LogoText>{t('organizationShortName')}</LogoText>
          </LogoContainer>
          <FooterText>
            {t('footer.description')}
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>{t('footer.mainLinks')}</FooterTitle>
          <FooterLink to="/about">{t('common.about')}</FooterLink>
          <FooterLink to="/activities">{t('common.activities')}</FooterLink>
          <FooterLink to="/publications">{t('common.publications')}</FooterLink>
          <FooterLink to="/news">{t('common.news')}</FooterLink>
          <FooterLink to="/contact">{t('common.contact')}</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>{t('footer.contactInfo.title')}</FooterTitle>
          <ContactItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <FooterText>{t('contact.contactInfo.email.value')}</FooterText>
          </ContactItem>
          <ContactItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <FooterText>{t('contact.contactInfo.phone.value')}</FooterText>
          </ContactItem>
          <ContactItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <FooterText>{t('contact.contactInfo.address.value')}</FooterText>
          </ContactItem>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <FooterText>
          © {new Date().getFullYear()} {t('organizationShortName')} ({t('organizationName')}). {t('footer.copyright')}
        </FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
