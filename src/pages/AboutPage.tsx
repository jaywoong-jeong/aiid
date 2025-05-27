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

const Section = styled.section`
  margin-bottom: 5rem;
  
  &:last-child {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--secondary);
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  
  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const MemberImage = styled.div<{ imageUrl?: string }>`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: rgba(26, 75, 140, 0.05);
  background-image: ${props => props.imageUrl ? `url('${props.imageUrl}')` : 'none'};
  background-size: cover;
  background-position: center;
  margin: 0 auto 1.5rem;
  border: 4px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '${props => !props.imageUrl ? '👤' : ''}';
    font-size: 3rem;
    opacity: 0.3;
  }
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
`;

const MemberBio = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  white-space: pre-line;
`;

const ActivityItem = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(26, 75, 140, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: var(--primary);
  font-size: 1.8rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
`;

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageHeader>
        <PageTitleContainer>
          <PageTitle style={{ color: 'white' }}>
            {t('about.title')}
          </PageTitle>
          <PageSubtitle>
            {t('about.subtitle') || t('hero.subtitle')}
          </PageSubtitle>
        </PageTitleContainer>
      </PageHeader>
      
      <Container>
        <Section>
          <SectionTitle>{t('about.mission.title')}</SectionTitle>
          <Paragraph>{t('about.mission.paragraph1')}</Paragraph>
          <Paragraph>{t('about.mission.paragraph2')}</Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('about.activities.title')}</SectionTitle>
          
          <ActivityItem>
            <ActivityIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </ActivityIcon>
            <ActivityContent>
              <ActivityTitle>{t('about.activities.research.title')}</ActivityTitle>
              <Paragraph style={{ marginBottom: 0 }}>{t('about.activities.research.description')}</Paragraph>
            </ActivityContent>
          </ActivityItem>
          
          <ActivityItem>
            <ActivityIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </ActivityIcon>
            <ActivityContent>
              <ActivityTitle>{t('about.activities.policy.title')}</ActivityTitle>
              <Paragraph style={{ marginBottom: 0 }}>{t('about.activities.policy.description')}</Paragraph>
            </ActivityContent>
          </ActivityItem>
          
          <ActivityItem>
            <ActivityIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </ActivityIcon>
            <ActivityContent>
              <ActivityTitle>{t('about.activities.campaign.title')}</ActivityTitle>
              <Paragraph style={{ marginBottom: 0 }}>{t('about.activities.campaign.description')}</Paragraph>
            </ActivityContent>
          </ActivityItem>
          
          <ActivityItem>
            <ActivityIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </ActivityIcon>
            <ActivityContent>
              <ActivityTitle>{t('about.activities.network.title')}</ActivityTitle>
              <Paragraph style={{ marginBottom: 0 }}>{t('about.activities.network.description')}</Paragraph>
            </ActivityContent>
          </ActivityItem>
        </Section>
        
        <Section>
          <SectionTitle>{t('about.team.title')}</SectionTitle>
          <TeamGrid>
            {(t('about.team.members', { returnObjects: true }) as any[]).map((member, index: number) => (
              <TeamMember key={`member-${index}`}>
                <MemberImage imageUrl={member.image} />
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
        </Section>
        
        <Section>
          <SectionTitle>{t('about.history.title')}</SectionTitle>
          {(t('about.history.items', { returnObjects: true }) as any[]).map((item, index: number) => (
            <Paragraph key={`history-${index}`}>
              <strong>{item.year}:</strong> {item.description}
            </Paragraph>
          ))}
        </Section>
      </Container>
    </>
  );
};

export default AboutPage;
