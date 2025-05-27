// 활동 관련 타입
export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

// 프로젝트 관련 타입
export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  status: 'ongoing' | 'completed';
}

// 발간물 관련 타입
export interface Publication {
  id: string;
  title: string;
  date: string;
  authors: string[];
  description: string;
  category: 'research' | 'policy' | 'education' | 'other';
  imageUrl?: string;
  downloadUrl?: string;
}

// 뉴스 관련 타입
export interface News {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  link?: string;
}

// 보도자료 관련 타입
export interface PressRelease {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
}

// 팀 멤버 관련 타입
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  description?: string;
}

// 연혁 관련 타입
export interface History {
  year: number;
  description: string;
}

// 메인 페이지 히어로 섹션 관련 타입
export interface HeroSection {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImageUrl?: string;
}

// 연락처 정보 관련 타입
export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  operatingHours: string[];
}

// 데이터 내보내기 관련 타입
export interface WebsiteData {
  organizationName: string;
  heroSection: HeroSection;
  mainActivities: Activity[];
  aboutDescription: string[];
  activityAreas: {
    title: string;
    description: string;
  }[];
  teamMembers: TeamMember[];
  history: History[];
  projects: Project[];
  recentActivities: Activity[];
  publications: Publication[];
  news: News[];
  pressReleases: PressRelease[];
  contactInfo: ContactInfo;
}
