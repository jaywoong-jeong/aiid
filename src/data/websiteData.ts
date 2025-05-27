import { WebsiteData } from './types';

const websiteData: WebsiteData = {
  organizationName: '민주사회를 위한 AI 연구소',
  
  heroSection: {
    title: '민주사회를 위한 AI 연구소',
    subtitle: '인공지능 기술이 민주적 가치와 사회적 형평성을 증진하는 방향으로 발전할 수 있도록 연구하고 활동하는 시민사회단체입니다.',
    buttonText: '더 알아보기',
    buttonLink: '/about',
    backgroundImageUrl: '/images/hero-background.jpg',
  },
  
  mainActivities: [
    {
      id: 'activity-1',
      title: '연구 및 교육',
      date: '',
      description: 'AI 기술의 사회적 영향에 대한 연구를 수행하고, 시민들의 AI 리터러시 향상을 위한 교육 프로그램을 제공합니다.',
      imageUrl: '/images/research-education.jpg',
    },
    {
      id: 'activity-2',
      title: '정책 제안',
      date: '',
      description: 'AI 기술의 윤리적, 사회적 문제에 대응하기 위한 정책을 연구하고 제안합니다.',
      imageUrl: '/images/policy.jpg',
    },
    {
      id: 'activity-3',
      title: '캠페인 활동',
      date: '',
      description: 'AI 기술이 민주적 가치와 인권을 존중하는 방향으로 발전할 수 있도록 다양한 캠페인을 진행합니다.',
      imageUrl: '/images/campaign.jpg',
    },
  ],
  
  aboutDescription: [
    'AI를 위한 민주사회는 인공지능 기술이 민주적 가치와 사회적 형평성을 증진하는 방향으로 발전할 수 있도록 연구하고 활동하는 시민사회단체입니다. 우리는 기술이 사회에 미치는 영향을 비판적으로 성찰하고, 모든 시민이 AI 기술의 혜택을 공평하게 누릴 수 있는 미래를 지향합니다.',
    '우리는 인공지능 기술이 인권과 민주주의, 사회정의, 지속가능성의 가치를 존중하고 강화하는 방향으로 발전해야 한다고 믿습니다. 이를 위해 연구, 교육, 정책 제안, 캠페인 등 다양한 활동을 수행하고 있습니다.'
  ],
  
  activityAreas: [
    {
      title: '연구 및 교육',
      description: 'AI 기술의 사회적 영향에 대한 연구를 수행하고, 시민들의 AI 리터러시 향상을 위한 교육 프로그램을 제공합니다.'
    },
    {
      title: '정책 제안',
      description: 'AI 기술의 윤리적, 사회적 문제에 대응하기 위한 정책을 연구하고 제안합니다.'
    },
    {
      title: '캠페인 활동',
      description: 'AI 기술이 민주적 가치와 인권을 존중하는 방향으로 발전할 수 있도록 다양한 캠페인을 진행합니다.'
    },
    {
      title: '네트워크 구축',
      description: '국내외 다양한 시민사회단체, 학계, 기업, 정부 기관과 협력하여 AI 거버넌스에 관한 논의를 이끌어갑니다.'
    }
  ],
  
  teamMembers: [
    {
      id: 'member-1',
      name: '김민주',
      role: '대표',
      imageUrl: '/images/member-1.jpg',
    },
    {
      id: 'member-2',
      name: '이기술',
      role: '연구원',
      imageUrl: '/images/member-2.jpg',
    },
    {
      id: 'member-3',
      name: '박지능',
      role: '정책담당',
      imageUrl: '/images/member-3.jpg',
    },
    {
      id: 'member-4',
      name: '최윤리',
      role: '교육담당',
      imageUrl: '/images/member-4.jpg',
    }
  ],
  
  history: [
    {
      year: 2022,
      description: '민주사회를 위한 AI 모임 설립'
    },
    {
      year: 2023,
      description: "'AI 민주주의 포럼' 시작, 첫 번째 연구보고서 발간"
    },
    {
      year: 2024,
      description: 'AI 리터러시 교육 프로그램 개발 및 시행, 국제 네트워크 구축'
    },
    {
      year: 2025,
      description: 'AI 윤리 및 거버넌스 관련 정책 제안서 발표'
    }
  ],
  
  projects: [
    {
      id: 'project-1',
      title: 'AI 리터러시 교육 프로그램',
      period: '2024년 3월 ~ 현재',
      description: '일반 시민들이 AI 기술을 이해하고 비판적으로 활용할 수 있도록 돕는 교육 프로그램을 개발하고 운영하고 있습니다. 청소년, 노인, 사회 취약계층 등 다양한 대상을 위한 맞춤형 교육 콘텐츠를 제공합니다.',
      status: 'ongoing'
    },
    {
      id: 'project-2',
      title: 'AI 윤리 가이드라인 연구',
      period: '2024년 1월 ~ 현재',
      description: '한국적 맥락에서 AI 기술의 윤리적 개발과 활용을 위한 가이드라인을 연구하고 있습니다. 국내외 AI 윤리 정책을 비교 분석하고, 실질적으로 적용 가능한 윤리 원칙을 도출하는 것을 목표로 합니다.',
      status: 'ongoing'
    },
    {
      id: 'project-3',
      title: 'AI 알고리즘 감시 네트워크',
      period: '2023년 9월 ~ 현재',
      description: '공공 및 민간 영역에서 활용되는 AI 알고리즘의 투명성과 책임성을 모니터링하는 네트워크를 구축하고 있습니다. 알고리즘의 사회적 영향을 평가하고, 문제점을 개선하기 위한 정책을 제안합니다.',
      status: 'ongoing'
    }
  ],
  
  recentActivities: [
    {
      id: 'recent-1',
      title: 'AI 민주주의 포럼 2025',
      date: '2025년 4월 15일',
      description: 'AI 기술의 민주적 거버넌스를 주제로 전문가와 시민이 함께하는 포럼을 개최했습니다.',
      imageUrl: '/images/forum.jpg',
      link: '#'
    },
    {
      id: 'recent-2',
      title: '청소년 AI 캠프',
      date: '2025년 2월 10일 ~ 14일',
      description: '중고등학생을 대상으로 AI 기술의 원리와 사회적 영향에 대해 배우는 5일간의 캠프를 진행했습니다.',
      imageUrl: '/images/youth-camp.jpg',
      link: '#'
    },
    {
      id: 'recent-3',
      title: 'AI 정책 토론회',
      date: '2025년 1월 25일',
      description: '국회와 협력하여 AI 규제 정책에 대한 토론회를 개최하고 정책 제안서를 발표했습니다.',
      imageUrl: '/images/policy-forum.jpg',
      link: '#'
    },
    {
      id: 'recent-4',
      title: 'AI 윤리 보고서 발간',
      date: '2024년 12월 1일',
      description: "'한국의 AI 윤리 현황과 과제'라는 제목의 연구 보고서를 발간하고 언론 및 학계에 배포했습니다.",
      imageUrl: '/images/report.jpg',
      link: '#'
    }
  ],
  
  publications: [
    {
      id: 'pub-1',
      title: '한국의 AI 윤리 현황과 과제',
      date: '2024년 12월',
      authors: ['김민주', '이기술', '박지능'],
      description: '본 보고서는 국내 AI 윤리 정책 현황을 분석하고, 해외 사례와의 비교를 통해 한국적 맥락에서 AI 윤리의 발전 방향을 제시합니다. 특히 AI 기술의 공정성, 투명성, 책임성 측면에서 현재의 문제점과 개선 과제를 도출하였습니다.',
      category: 'research',
      imageUrl: '/images/publication-1.jpg',
      downloadUrl: '#'
    },
    {
      id: 'pub-2',
      title: '인공지능과 민주주의: 기회와 도전',
      date: '2024년 7월',
      authors: ['박지능', '최윤리'],
      description: 'AI 기술이 민주주의 제도와 가치에 미치는 영향을 다각도로 분석한 보고서입니다. 알고리즘 의사결정의 확산이 민주적 거버넌스에 가져오는 기회와 위험을 검토하고, 시민참여형 AI 거버넌스 모델을 제안합니다.',
      category: 'research',
      imageUrl: '/images/publication-2.jpg',
      downloadUrl: '#'
    },
    {
      id: 'pub-3',
      title: 'AI 알고리즘의 사회적 영향 평가 방법론',
      date: '2024년 3월',
      authors: ['이기술', '김민주'],
      description: 'AI 알고리즘이 사회에 미치는 영향을 체계적으로 평가하기 위한 방법론을 제시하는 보고서입니다. 국내외 알고리즘 영향평가 사례를 검토하고, 한국 사회에 적합한 평가 프레임워크를 개발하였습니다.',
      category: 'policy',
      imageUrl: '/images/publication-3.jpg',
      downloadUrl: '#'
    },
    {
      id: 'pub-4',
      title: '시민을 위한 AI 리터러시 가이드',
      date: '2023년 11월',
      authors: ['최윤리', '박지능'],
      description: '일반 시민들이 AI 기술을 이해하고 비판적으로 활용하기 위한 가이드북입니다. AI의 기본 개념부터 일상생활에서 마주하는 AI 시스템의 특성과 한계, 그리고 시민으로서 AI에 대응하는 방법을 담고 있습니다.',
      category: 'education',
      imageUrl: '/images/publication-4.jpg',
      downloadUrl: '#'
    }
  ],
  
  news: [
    {
      id: 'news-1',
      title: '2025년 AI 민주주의 포럼 성공적 개최',
      date: '2025년 4월 20일',
      excerpt: "지난 4월 15일 개최된 'AI 민주주의 포럼 2025'가 300여 명의 참가자와 함께 성공적으로 마무리되었습니다. 이번 포럼에서는 AI 기술의 민주적 거버넌스를 주제로...",
      imageUrl: '/images/news-1.jpg',
      link: '#'
    },
    {
      id: 'news-2',
      title: '청소년 AI 캠프 참가자 모집',
      date: '2025년 3월 15일',
      excerpt: "여름방학을 맞아 중고등학생을 대상으로 하는 'AI 민주시민 캠프'의 참가자를 모집합니다. 이번 캠프는 7월 25일부터 29일까지 진행되며...",
      imageUrl: '/images/news-2.jpg',
      link: '#'
    },
    {
      id: 'news-3',
      title: 'AI 윤리 가이드라인 공청회 개최 안내',
      date: '2025년 2월 28일',
      excerpt: "우리 단체가 연구해온 'AI 윤리 가이드라인'에 대한 공청회를 3월 15일 오후 2시 서울시민청에서 개최합니다. 많은 참여 바랍니다...",
      imageUrl: '/images/news-3.jpg',
      link: '#'
    },
    {
      id: 'news-4',
      title: 'AI 정책 연구원 채용 공고',
      date: '2025년 2월 10일',
      excerpt: "AI를 위한 민주사회에서 AI 정책 및 윤리 연구를 담당할 연구원을 모집합니다. 관련 분야 석사 이상 학위 소지자로 AI 기술의 사회적 영향에 관심이 있는 분...",
      imageUrl: '/images/news-4.jpg',
      link: '#'
    }
  ],
  
  pressReleases: [
    {
      id: 'press-1',
      title: "AI를 위한 민주사회, 'AI 윤리 보고서' 발간",
      date: '2024년 12월 5일',
      excerpt: "AI를 위한 민주사회는 지난 1일 '한국의 AI 윤리 현황과 과제'라는 제목의 연구보고서를 발간했다. 이 보고서는 국내 AI 윤리 정책 현황과 해외 사례를 비교 분석하고, 한국적 맥락에서 AI 윤리의 발전 방향을 제시한다...",
      link: '#'
    },
    {
      id: 'press-2',
      title: "AI를 위한 민주사회, 국회와 함께 'AI 정책 토론회' 개최",
      date: '2025년 1월 27일',
      excerpt: "AI를 위한 민주사회는 지난 25일 국회 과학기술정보방송통신위원회와 공동으로 'AI 시대의 민주적 거버넌스'를 주제로 정책 토론회를 개최했다. 이날 토론회에는 학계, 시민사회, 기업, 정부 관계자 등 100여 명이 참석했다...",
      link: '#'
    },
    {
      id: 'press-3',
      title: "AI를 위한 민주사회, 'AI 리터러시 교육' 사업 시작",
      date: '2024년 3월 5일',
      excerpt: "AI를 위한 민주사회는 일반 시민들의 AI 이해도를 높이기 위한 'AI 리터러시 교육' 사업을 본격적으로 시작한다고 밝혔다. 이 사업은 청소년, 노인, 사회 취약계층 등 다양한 대상을 위한 맞춤형 교육 프로그램을 제공한다...",
      link: '#'
    }
  ],
  
  contactInfo: {
    address: '서울특별시 강남구 테헤란로 123, 5층',
    email: 'info@aidemocracy.org',
    phone: '02-123-4567',
    operatingHours: [
      '월요일 - 금요일: 오전 9시 - 오후 6시',
      '토요일, 일요일, 공휴일: 휴무'
    ]
  }
};

export default websiteData;
