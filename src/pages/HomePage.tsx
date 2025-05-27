import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = styled.section<{ bgImage?: string }>`
  position: relative;
  height: 75vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--primary);
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    height: 65vh;
    text-align: center;
    justify-content: center;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 60%;
    height: 200%;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
  line-height: 1.1;
  max-width: 650px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 550px;
  opacity: 0.9;
  font-weight: 300;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: var(--secondary);
  color: white;
  padding: 0.9rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: 0 4px 12px rgba(210, 38, 48, 0.3);
  
  &:hover {
    background-color: var(--secondary-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(210, 38, 48, 0.4);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.3rem;
  text-align: center;
  margin: 4rem 0 2.5rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: var(--secondary);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(26, 75, 140, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: var(--primary);
  font-size: 1.8rem;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
`;

const CardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const CardLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  
  &:hover {
    color: var(--primary-light);
    
    svg {
      transform: translateX(3px);
    }
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }
`;

const CallToAction = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 5rem 2rem;
  margin: 5rem 0 3rem 0;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const CtaContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  span {
    color: var(--secondary);
  }
`;

const CtaText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-secondary);
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  color: white;
  padding: 0.9rem 2.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: 0 4px 12px rgba(26, 75, 140, 0.2);
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(26, 75, 140, 0.3);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            {t('hero.title')}
          </HeroTitle>
          <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
          <HeroButton to="/about">
            {t('hero.buttonText')}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </HeroButton>
        </HeroContent>
      </HeroSection>
      
      <div className="container">
        <SectionTitle>{t('home.activities.title')}</SectionTitle>
        <CardGrid>
          <Card>
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </IconWrapper>
            <CardTitle>{t('home.activities.research.title')}</CardTitle>
            <CardText>{t('home.activities.research.description')}</CardText>
            <CardLink to="/activities">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </CardLink>
          </Card>
          
          <Card>
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </IconWrapper>
            <CardTitle>{t('home.activities.policy.title')}</CardTitle>
            <CardText>{t('home.activities.policy.description')}</CardText>
            <CardLink to="/activities">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </CardLink>
          </Card>
          
          <Card>
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </IconWrapper>
            <CardTitle>{t('home.activities.campaign.title')}</CardTitle>
            <CardText>{t('home.activities.campaign.description')}</CardText>
            <CardLink to="/activities">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </CardLink>
          </Card>
        </CardGrid>
      
        <CallToAction>
          <CtaContainer>
            <CtaTitle>
              {t('home.cta.title').split(' ').map((word, index, array) => 
                index === array.length - 2 ? <span key={index}>{word} </span> : `${word} `
              )}
            </CtaTitle>
            <CtaText>{t('home.cta.description')}</CtaText>
            <CtaButton to="/contact">
              {t('home.cta.buttonText')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </CtaButton>
          </CtaContainer>
        </CallToAction>
      </div>
    </>
  );
};

export default HomePage;
