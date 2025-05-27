import React from 'react';
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
  border-radius: 0 0 100px 0;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -10%;
    left: -5%;
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const NewsCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const NewsImage = styled.div<{ imageUrl?: string }>`
  height: 200px;
  background-color: rgba(26, 75, 140, 0.05);
  background-image: ${props => props.imageUrl ? `url('${props.imageUrl}')` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '📰';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: ${props => props.imageUrl ? '0' : '0.2'};
  }
`;

const NewsContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const NewsTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
`;

const NewsDate = styled.p`
  font-size: 0.9rem;
  color: var(--secondary);
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 6px;
  }
`;

const NewsExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const NewsLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  margin-top: auto;
  
  svg {
    margin-left: 6px;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: var(--primary-light);
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const PressReleaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PressItem = styled.div`
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
`;

const PressTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
`;

const PressDate = styled.p`
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

const PressExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin: 4rem 0 2rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
  &::after {
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
  
  &:first-of-type {
    margin-top: 0;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 0.8rem;
`;

const PageButton = styled.button<{ active?: boolean }>`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.active ? 'none' : '1px solid rgba(0, 0, 0, 0.08)'};
  background-color: ${props => props.active ? 'var(--primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border-radius: 8px;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: ${props => props.active ? '0 4px 8px rgba(0, 0, 0, 0.15)' : 'none'};
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(0, 0, 0, 0.03)'};
    transform: translateY(-2px);
  }
`;

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageHeader>
        <PageTitleContainer>
          <PageTitle style={{ color: 'white' }}>
            {t('news.title')}
          </PageTitle>
          <PageSubtitle>
            {t('news.subtitle') || t('hero.subtitle')}
          </PageSubtitle>
        </PageTitleContainer>
      </PageHeader>
      
      <Container>
        <SectionTitle>{t('news.latestNews.title')}</SectionTitle>
        <NewsGrid>
          {(t('news.latestNews.items', { returnObjects: true }) as any[]).map((item, index) => (
            <NewsCard key={`news-${index}`}>
              <NewsImage imageUrl={item.image} />
              <NewsContent>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsDate>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {item.date}
                </NewsDate>
                <NewsExcerpt>{item.description}</NewsExcerpt>
                <NewsLink href="#">
                  {t('news.latestNews.readMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </NewsLink>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
        
        <SectionTitle>{t('news.pressReleases.title')}</SectionTitle>
        <PressReleaseList>
          {(t('news.pressReleases.items', { returnObjects: true }) as any[]).map((item, index) => (
            <PressItem key={`press-${index}`}>
              <PressTitle>{item.title}</PressTitle>
              <PressDate>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {item.date}
              </PressDate>
              <PressExcerpt>{item.description}</PressExcerpt>
              <NewsLink href="#">
                {t('news.pressReleases.readMore')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </NewsLink>
            </PressItem>
          ))}
        </PressReleaseList>
        
        <Pagination>
          {[1, 2, 3, 4, 5].map((page) => (
            <PageButton key={`page-${page}`} active={page === 1}>{page}</PageButton>
          ))}
          <PageButton>
            {t('news.pagination.next')}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </PageButton>
        </Pagination>
      </Container>
    </>
  );
};

export default NewsPage;
