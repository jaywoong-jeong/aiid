import { createGlobalStyle } from 'styled-components';

// 현대적인 미국 스타일의 글로벌 스타일 정의
export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  :root {
    /* 현대적인 미국 스타일 색상 팔레트 */
    --primary: #1a4b8c;       /* 현대적인 네이비 블루 */
    --primary-light: #3a6ba5;  /* 밝은 파란색 */
    --secondary: #d22630;     /* 현대적인 빨간색 */
    --secondary-light: #e05a64; /* 밝은 빨간색 */
    --accent: #ffffff;        /* 흰색 */
    --text-primary: #202020;  /* 거의 검정색 */
    --text-secondary: #505050; /* 어두운 회색 */
    --background: #f8f9fa;    /* 밝은 회색 배경 */
    --card-bg: #ffffff;       /* 카드 배경 흰색 */
    --border: #e2e2e2;        /* 경계선 색상 */
    --success: #28a745;       /* 성공 색상 */
    --warning: #ffc107;       /* 경고 색상 */
    --danger: #dc3545;        /* 위험 색상 */
    --info: #17a2b8;          /* 정보 색상 */
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.5rem;
  }
  
  h3 {
    font-size: 2rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-light);
    }
  }
  
  button {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* 반응형 컨테이너 */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  /* 유틸리티 클래스 */
  .text-center {
    text-align: center;
  }
  
  .text-white {
    color: white;
  }
  
  .my-4 {
    margin: 2rem 0;
  }
  
  .py-5 {
    padding: 3rem 0;
  }
  
  /* 하이라이트 클래스 */
  .highlight-primary {
    color: var(--primary-light);
    font-weight: 700;
  }
  
  .highlight-secondary {
    color: var(--secondary);
    font-weight: 700;
  }
`;

export default GlobalStyles;
