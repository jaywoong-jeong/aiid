import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.5rem 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-light);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  padding: 0.75rem 1rem;
  margin: 0 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--primary);
    background-color: rgba(26, 75, 140, 0.05);
  }
  
  &.active {
    color: var(--primary);
    font-weight: 600;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--primary);
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(26, 75, 140, 0.05);
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// 로고 아이콘 컴포넌트
const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

// 모바일 메뉴 드롭다운
const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 99;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    color: var(--primary);
    background-color: rgba(26, 75, 140, 0.05);
  }
`;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">
          <LogoIcon>AI</LogoIcon>
          <span>{t('organizationShortName')}</span>
        </Logo>
        <Nav>
          <NavLink to="/">{t('common.home')}</NavLink>
          <NavLink to="/about">{t('common.about')}</NavLink>
          <NavLink to="/activities">{t('common.activities')}</NavLink>
          <NavLink to="/publications">{t('common.publications')}</NavLink>
          <NavLink to="/news">{t('common.news')}</NavLink>
          <NavLink to="/contact">{t('common.contact')}</NavLink>
        </Nav>
        <NavRight>
          <LanguageSwitcher />
          <MobileMenuButton 
            aria-label="메뉴" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </NavRight>
      </NavContainer>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileNavLink to="/">{t('common.home')}</MobileNavLink>
        <MobileNavLink to="/about">{t('common.about')}</MobileNavLink>
        <MobileNavLink to="/activities">{t('common.activities')}</MobileNavLink>
        <MobileNavLink to="/publications">{t('common.publications')}</MobileNavLink>
        <MobileNavLink to="/news">{t('common.news')}</MobileNavLink>
        <MobileNavLink to="/contact">{t('common.contact')}</MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
