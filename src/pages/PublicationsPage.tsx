import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const PageHeader = styled.div`
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  margin-bottom: 4rem;
  border-radius: 0 0 0 100px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 30%;
    height: 120%;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    z-index: 1;
  }
`;

const PageTitleContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  flex-wrap: wrap;
`;

const Tab = styled.button<{ active?: boolean }>`
  padding: 1rem 1.8rem;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-secondary)'};
  border-bottom: ${props => props.active ? '3px solid var(--secondary)' : 'none'};
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  
  &:hover {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
  }
`;

const PublicationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const PublicationItem = styled.div`
  display: flex;
  gap: 2.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PublicationImage = styled.div<{ imageUrl?: string }>`
  min-width: 180px;
  height: 250px;
  background-color: rgba(26, 75, 140, 0.05);
  background-image: ${props => props.imageUrl ? `url('${props.imageUrl}')` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  
  &::before {
    content: '📜';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: ${props => props.imageUrl ? '0' : '0.2'};
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const PublicationContent = styled.div`
  flex: 1;
`;

const PublicationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
`;

const PublicationDate = styled.p`
  font-size: 0.95rem;
  color: var(--secondary);
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
`;

const PublicationAuthors = styled.p`
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  
  svg {
    margin-right: 8px;
    color: var(--primary);
  }
`;

const PublicationDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.8rem;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const PublicationLink = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: var(--primary);
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  
  svg {
    margin-left: 8px;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    svg {
      transform: translateY(-1px);
    }
  }
`;

const PublicationsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('research');
  
  return (
    <>
      <PageHeader>
        <PageTitleContainer>
          <PageTitle style={{ color: 'white' }}>
            {t('publications.title')}
          </PageTitle>
          <PageSubtitle>
            {t('publications.subtitle') || t('hero.subtitle')}
          </PageSubtitle>
        </PageTitleContainer>
      </PageHeader>
      
      <Container>
        <CategoryTabs>
          <Tab 
            active={activeCategory === 'research'} 
            onClick={() => setActiveCategory('research')}
          >
            {t('publications.categories.research')}
          </Tab>
          <Tab 
            active={activeCategory === 'policy'} 
            onClick={() => setActiveCategory('policy')}
          >
            {t('publications.categories.policy')}
          </Tab>
          <Tab 
            active={activeCategory === 'education'} 
            onClick={() => setActiveCategory('education')}
          >
            {t('publications.categories.education')}
          </Tab>
          <Tab 
            active={activeCategory === 'other'} 
            onClick={() => setActiveCategory('other')}
          >
            {t('publications.categories.other')}
          </Tab>
        </CategoryTabs>
        
        <PublicationsList>
          {(t('publications.items', { returnObjects: true }) as any[]).map((item, index) => (
            <PublicationItem key={`publication-${index}`}>
              <PublicationImage imageUrl={item.image} />
              <PublicationContent>
                <PublicationTitle>{item.title}</PublicationTitle>
                <PublicationDate>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {item.date}
                </PublicationDate>
                <PublicationAuthors>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  {t('publications.authorPrefix')}: {item.authors.join(', ')}
                </PublicationAuthors>
                <PublicationDescription>
                  {item.description}
                </PublicationDescription>
                <PublicationLink href="#">
                  {item.downloadText || t('publications.downloadButton')}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </PublicationLink>
              </PublicationContent>
            </PublicationItem>
          ))}
        </PublicationsList>
      </Container>
    </>
  );
};

export default PublicationsPage;
