import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;

const LanguageButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${props => props.active ? '#0056b3' : '#666'};
  font-size: 0.9rem;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  margin: 0 0.2rem;
  border-radius: 4px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Divider = styled.span`
  color: #ccc;
  margin: 0 0.2rem;
`;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <SwitcherContainer>
      <LanguageButton 
        active={i18n.language === 'ko'} 
        onClick={() => changeLanguage('ko')}
      >
        KO
      </LanguageButton>
      <Divider>|</Divider>
      <LanguageButton 
        active={i18n.language === 'en'} 
        onClick={() => changeLanguage('en')}
      >
        EN
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
