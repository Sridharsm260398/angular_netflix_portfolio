import { Injectable } from '@angular/core';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  link?: string;
  imagePosition?: string;
  fullDescription?: string;
  techStack?: string[];
  highlights?: string[];
  team?: TeamMember[];
  duration?: string;
  client?: string;
  video?: string;
  audio?: string;
  isCertificate?: boolean;
}

export interface PortfolioCategory {
  title: string;
  isRanked?: boolean;
  items: PortfolioItem[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private readonly CINEMATIC_VIDEO = 'https://assets.mixkit.co/videos/preview/mixkit-cyber-security-with-electronic-padlock-and-digital-data-28314-large.mp4';
  private readonly CINEMATIC_AUDIO = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'; /* High-energy Action/Tech */

  getHeroData() {
    return {
      title: 'Sridhar S M',
      roles: ['Software Developer', 'Angular Expert', 'Full Stack Developer'],
      bio: `Results-driven Software Developer with 4+ years of experience designing and delivering responsive, high-performance UI components using Angular. Skilled in developing real-time payment solutions and cybersecurity dashboard components, with a focus on scalability, accessibility (WCAG compliance), and RESTful API integration.`,
      image: '/img/profile-img2.jpg',
      video: 'https://cdn.pixabay.com/video/2020/05/11/38608-418047021_large.mp4',
      resumeLink: '/sridhar_resume.pdf',
      location: 'Bengaluru, KA, India',
      experience: '4+ Years'
    };
  }

  getTechnicalSkills() {
    return [
      { category: 'Frontend', skills: 'JavaScript (ES6+), TypeScript, Angular 16, HTML5, CSS3, Bootstrap, Angular Material' },
      { category: 'Backend', skills: 'Node.js, Express.js, REST APIs' },
      { category: 'Databases', skills: 'PostgreSQL, DB2, MongoDB' },
      { category: 'Deployment', skills: 'Azure, Render, Vercel, JBOSS' },
      { category: 'Tools', skills: 'Git, Postman, Swagger UI, Jira, VS Code' },
      { category: 'Testing', skills: 'DevTools, SoapUI' },
      { category: 'Accessibility', skills: 'WCAG 2.1' },
      { category: 'Methodologies', skills: 'Agile, Scrum, Waterfall' }
    ];
  }

  getContactData() {
    return {
      email: 'sridharsm26@gmail.com',
      phone: '+91-9686802325',
      location: 'Bengaluru, KA, India',
      linkedin: 'https://linkedin.com/in/sridhar-s-m-b64274291',
      github: 'https://github.com/Sridharsm260398',
      threads: 'https://www.threads.net/@sridhar_gowda._',
      instagram: 'https://www.instagram.com/sridhar_gowda._',
      sisaUrl: 'https://www.sisainfosec.com/login/#'
    };
  }

  getCategories(): PortfolioCategory[] {
    return [
      {
        title: 'Trending Now: Work Experience',
        isRanked: true,
        items: [
          {
            id: 1,
            title: 'Software Engineer',
            subtitle: 'SISA - Forensic Driven Cybersecurity',
            description: 'Building Angular components for ProACT MXDR to visualize threat intelligence and real-time alerts.',
            image: '/img/sisa_compay.png',
            link: 'https://www.sisainfosec.com/login/#',
            duration: 'Feb 2025 – Present',
            client: 'SISA Information Security',
            fullDescription: 'Built Angular components for ProACT MXDR to visualize threat intelligence and real-time alerts. Integrated REST APIs to display incident timelines and detection data. Improved UI accessibility and usability for security analysts working on forensic-driven cybersecurity solutions.',
            techStack: ['Angular 16', 'TypeScript', 'REST APIs', '.NET Backend', 'WCAG 2.1'],
            highlights: [
              'Built Angular components for ProACT MXDR to visualize threat intelligence and real-time alerts',
              'Integrated REST APIs to display incident timelines and detection data',
              'Improved UI accessibility and usability for security analysts',
              'Collaborated with backend engineers to consume .NET endpoints',
              'Implemented real-time WebSockets for instant alert notifications'
            ],
            team: [
              { name: 'Sridhar S M', role: 'Lead Frontend Developer', image: '/img/profile-img2.jpg' },
              { name: 'Shailesh', role: 'Backend Architect', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
              { name: 'Anand Krishnamurthy', role: 'Senior Security Engineer', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80' },
              { name: 'Anantaraj Upadhye', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80' },
              { name: 'Archarna Marimuthu', role: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
              { name: 'Ashish Kumar', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
              { name: 'Bidyut Goswami', role: 'Security Analyst', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
              { name: 'Fahad S', role: 'DevOps Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
              { name: 'Ganeshvel Manigandhi', role: 'QA Automation', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
              { name: 'Hemanth M', role: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Neelanjan Mahato', role: 'Security Engineer', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Pradyumna Kumar Sahu', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
              { name: 'Ramesh Balasubramani', role: 'Senior Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
              { name: 'Ranga Babu', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1564564321837-a57b607ce3c0?w=200&q=80' },
              { name: 'Rudra Mondal', role: 'QA Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
              { name: 'Sairani R', role: 'Security Analyst', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' },
              { name: 'Yaswanth Reddy', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e1c6?w=200&q=80' },
              { name: 'Mahaboobsab Maniyar', role: 'Security Engineer', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' }
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 2,
            title: 'System Engineer',
            subtitle: 'TCS - Central Trust Bank (CTB)',
            description: 'Developed Angular apps for the TCS BaNCS Payments platform. Deployed Azure environments.',
            image: '/img/tcs_2.png',
            duration: 'Jan 2024 – Feb 2025',
            client: 'Central Trust Bank (US Client)',
            fullDescription: 'Developed Angular apps for the TCS BaNCS Payments platform. Deployed and managed environments (DEV to PROD) on Azure. Built UI for FedNow instant payment features using Angular. Improved data flow using asynchronous API consumption. Reduced UI transaction times by 10%.',
            techStack: ['Angular 16', 'TypeScript', 'Azure', 'Node.js', 'REST APIs'],
            highlights: [
              'Built UI for FedNow instant payment features using Angular',
              'Improved data flow using asynchronous API consumption',
              'Reduced UI transaction times by 10% through optimized state management',
              'Deployed and managed environments (DEV to PROD) on Azure',
              'Ensured strict compliance with banking security protocols'
            ],
            team: [
              { name: 'Sridhar S M', role: 'Angular Developer', image: '/img/profile-img2.jpg' },
              { name: 'Sourabh', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
              { name: 'Takshak Bharadwaj', role: 'Senior Angular Dev', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
              { name: 'Janhavi M', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Jagadeesh', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Pavithra T M', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Ramakrishna ', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Neha', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Manikandan', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Thanmayi', role: 'QA Automation', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' }
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 3,
            title: 'Assistant System Engineer',
            subtitle: 'TCS - CIBC Payments',
            description: 'Created real-time payment UI with Angular and Node.js. Applied lazy loading for 20% performance gain.',
            image: '/img/cibc.png',
            duration: 'Dec 2021 – Dec 2023',
            client: 'Canadian Imperial Bank of Commerce (Canada)',
            fullDescription: 'Created real-time payment UI with Angular and Node.js. Applied lazy loading and code splitting for 20% performance gain. Improved accessibility and cross-device responsiveness. Developed reusable UI modules using Angular 16. Assisted in Node.js-based authentication flows. Participated in Agile sprints and maintained code quality.',
            techStack: ['Angular 16', 'Node.js', 'TypeScript', 'Bootstrap', 'WCAG'],
            highlights: [
              'Created real-time payment UI with Angular and Node.js',
              'Applied lazy loading and code splitting for 20% performance gain',
              'Improved accessibility and cross-device responsiveness',
              'Developed reusable UI modules using Angular 16',
              'Assisted in Node.js-based authentication flows',
              'Participated in Agile sprints and maintained code quality'
            ],
            team: [
              { name: 'Sridhar S M', role: 'Frontend Engineer', image: '/img/profile-img2.jpg' },
              { name: 'Nitin Pradhan', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Swarnanika Behar', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Deepak M K', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
              { name: 'Manoj T', role: 'Sr. Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
              { name: 'Chinmay Chinivalar', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Ganesh P J', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Mudassir Shaik', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Ravi Kiran V', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Biradar Nikita', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Mahesh Orchu', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Ravi Patneedi', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Vinay Reddy C R', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Puttu Ramu', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Mahendra Chevla', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Madhu Reddy', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Vedanth Kumar', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Gowtham Gorantla', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Ashish', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Abhishek Singh', role: 'Node.js Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          }
        ]
      },
      {
        title: 'Because You Watched: Project Experience',
        items: [
          {
            id: 4,
            title: 'ProACT MXDR',
            subtitle: 'SISA Internal Project • Feb 2024 – Present',
            description: 'Designed alert dashboards, incident views, and data tables in Angular 16 for cybersecurity threat management.',
            image: '/img/mxdr_1.png',
            imagePosition: 'top',
            link: 'https://www.sisainfosec.com/login/#',
            fullDescription: 'ProACT MXDR is SISA\'s flagship Managed Extended Detection and Response platform. Designed alert dashboards, incident views, and data tables in Angular 16. Consumed threat data APIs and handled real-time data rendering. Enhanced accessibility using WCAG standards to ensure all security analysts can use the platform efficiently.',
            techStack: ['Angular 16', 'TypeScript', '.NET APIs', 'WCAG 2.1', 'Real-time WebSockets', 'RxJS', 'SCSS'],
            highlights: [
              'Designed alert dashboards, incident views, and data tables in Angular 16',
              'Consumed threat data APIs and handled real-time data rendering',
              'Enhanced accessibility using WCAG standards',
              'Built interactive data visualizations for threat intelligence',
              'Implemented custom theming and responsive layouts'
            ],
            team: [
              { name: 'Sridhar S M', role: 'Lead Frontend Developer', image: '/img/profile-img2.jpg' },
              { name: 'Shailesh', role: 'Backend Architect', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
              { name: 'Anand Krishnamurthy', role: 'Senior Security Engineer', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80' },
              { name: 'Anantaraj Upadhye', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80' },
              { name: 'Archarna Marimuthu', role: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
              { name: 'Ashish Kumar', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
              { name: 'Bidyut Goswami', role: 'Security Analyst', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
              { name: 'Fahad S', role: 'DevOps Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
              { name: 'Ganeshvel Manigandhi', role: 'QA Automation', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
              { name: 'Hemanth M', role: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
              { name: 'Neelanjan Mahato', role: 'Security Engineer', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' },
              { name: 'Pradyumna Kumar Sahu', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
              { name: 'Ramesh Balasubramani', role: 'Senior Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
              { name: 'Ranga Babu', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1564564321837-a57b607ce3c0?w=200&q=80' },
              { name: 'Rudra Mondal', role: 'QA Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
              { name: 'Sairani R', role: 'Security Analyst', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' },
              { name: 'Yaswanth Reddy', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e1c6?w=200&q=80' },
              { name: 'Mahaboobsab Maniyar', role: 'Security Engineer', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' }
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 5,
            title: 'Central Trust Bank (CTB)',
            subtitle: 'TCS • US Client • Apr 2023 – Jan 2025',
            description: 'Built UI for FedNow instant payment features using Angular. Reduced UI transaction times by 10%.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80',
            fullDescription: 'Central Trust Bank is a major US banking client. Built UI for FedNow instant payment features using Angular. Improved data flow using asynchronous API consumption. Reduced UI transaction times by 10% through optimized rendering and state management.',
            techStack: ['Angular 16', 'TypeScript', 'Azure', 'FedNow APIs', 'Node.js'],
            highlights: [
              'Built UI for FedNow instant payment features',
              'Improved data flow using asynchronous API consumption',
              'Reduced UI transaction times by 10%'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 6,
            title: 'CIBC Payments',
            subtitle: 'TCS • Canada Client • Dec 2021 – Apr 2023',
            description: 'Created real-time payment UI with Angular and Node.js. Applied lazy loading for 20% performance gain.',
            image: '/img/cibc_2.png',
            fullDescription: 'Canadian Imperial Bank of Commerce (CIBC) is a leading Canadian bank. Created real-time payment UI with Angular and Node.js. Applied lazy loading and code splitting for 20% performance gain. Improved accessibility and cross-device responsiveness.',
            techStack: ['Angular 16', 'Node.js', 'TypeScript', 'Bootstrap', 'WCAG'],
            highlights: [
              'Created real-time payment UI with Angular and Node.js',
              'Applied lazy loading and code splitting for 20% performance gain',
              'Improved accessibility and cross-device responsiveness'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 7,
            title: 'S-Cart E-Commerce',
            subtitle: 'Personal Full Stack Project',
            description: 'A comprehensive e-commerce application with Angular frontend and Node.js/PostgreSQL backend.',
            link: 'https://webapps-cart.web.app/',
            image: '/img/unsplash/img-1.jpg',
            fullDescription: 'S-Cart is a personal full-stack e-commerce application demonstrating proficiency in both frontend and backend development. Features include product browsing, cart management, user authentication, and order processing.',
            techStack: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase Hosting'],
            highlights: [
              'Full-stack application with Angular frontend',
              'RESTful API backend with Node.js and Express.js',
              'PostgreSQL database for data persistence',
              'Deployed on Firebase and Render'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 8,
            title: 'S-Cart Swagger API',
            subtitle: 'RESTful API Documentation',
            description: 'Backend API fully documented with Swagger UI for the S-Cart application.',
            link: 'https://sridhars-webapp-restapi-postgres-v2.onrender.com/api-docs/',
            image: '/img/unsplash/img-2.jpg',
            fullDescription: 'Comprehensive RESTful API service for S-Cart, fully documented using Swagger UI. Provides endpoints for product management, user authentication, order processing, and more.',
            techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Swagger UI', 'Render'],
            highlights: [
              'Full REST API documentation with Swagger',
              'Authentication and authorization endpoints',
              'Product and order management APIs'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          }
        ]
      },
      {
        title: 'Blockbuster Skills & Technologies',
        items: [
          {
            id: 9,
            title: 'Frontend Mastery',
            subtitle: 'JavaScript (ES6+), TypeScript, Angular 16, HTML5, CSS3',
            description: 'Expert-level proficiency in modern frontend frameworks and core web technologies.',
            image: '/img/unsplash/img-3.jpg',
            highlights: [
              'Complete mastery of Angular architectures and components',
              'State management using RxJS Observables and Signals',
              'Responsive design implementation with modern CSS capabilities',
              'Performance optimization strategies for enterprise applications'
            ],
            team: [{ name: 'Sridhar S M', role: 'Frontend Expert', image: '/img/profile-img2.jpg' }]
          },
          {
            id: 10,
            title: 'Backend & Databases',
            subtitle: 'Node.js, Express.js, PostgreSQL, DB2, MongoDB',
            description: 'Full-stack capabilities with server-side and database expertise.',
            image: '/img/unsplash/img-4.jpg',
            duration: '2+ Years Exp',
            fullDescription: 'Experienced in building scalable backend services using Node.js and Express.js. Worked with PostgreSQL, DB2, and MongoDB databases for data persistence in financial and cybersecurity applications.',
            techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'DB2', 'MongoDB', 'REST APIs', 'Sequelize', 'Mongoose'],
            highlights: [
              'Architected robust RESTful API endpoints for financial and security applications',
              'Designed complex database schemas using PostgreSQL and MongoDB',
              'Implemented secure authentication and authorization middleware',
              'Optimized database queries for high-performance financial transactions'
            ],
            team: [{ name: 'Sridhar S M', role: 'Full Stack Dev', image: '/img/profile-img2.jpg' }],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 11,
            title: 'Cloud & DevOps',
            subtitle: 'Azure, AWS, Render, Vercel, JBOSS',
            description: 'Cloud-based deployments and environment management across platforms.',
            image: '/img/unsplash/img-5.jpg',
            duration: 'Continuous Integration',
            fullDescription: 'Deployed and managed enterprise applications across Azure cloud environments. Experience from DEV to PROD pipeline management. Also deployed personal projects using Render, Vercel, and Firebase.',
            techStack: ['Azure', 'AWS', 'Render', 'Vercel', 'JBOSS', 'Firebase', 'CI/CD', 'Git Actions'],
            highlights: [
              'Managed enterprise environments across Azure from DEV to PROD',
              'Secured seamless pipeline deployments with CI/CD',
              'Cloud infrastructure management utilizing AWS and Azure tools'
            ],
            team: [{ name: 'Sridhar S M', role: 'DevOps & Deployment', image: '/img/profile-img2.jpg' }],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 12,
            title: 'Testing & Quality',
            subtitle: 'DevTools, SoapUI, WCAG 2.1, Agile/Scrum',
            description: 'Ensuring code quality, accessibility compliance, and agile development practices.',
            image: '/img/unsplash/img-6.jpg',
            duration: 'Agile Standards',
            fullDescription: 'Committed to code quality through thorough testing with DevTools and SoapUI. WCAG 2.1 accessibility champion. Strong advocate for Agile methodologies including Scrum and Waterfall.',
            techStack: ['Chrome DevTools', 'SoapUI', 'WCAG 2.1', 'Agile', 'Scrum', 'Waterfall', 'Jira', 'Postman'],
            highlights: [
              'Enforced strict WCAG 2.1 accessibility standards across massive banking apps',
              'Expert API testing implementation using Postman and SoapUI',
              'Streamlined team communication using Agile/Scrum frameworks'
            ],
            team: [{ name: 'Sridhar S M', role: 'Quality Assurance', image: '/img/profile-img2.jpg' }],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          }
        ]
      },
      {
        title: 'New Releases: Certifications',
        items: [
          {
            id: 13,
            title: 'Angular – The Complete Guide',
            subtitle: 'Udemy Certification',
            description: 'Comprehensive mastery of Angular framework, from basics to advanced concepts.',
            image: '/img/unsplash/img-7.jpg'
          },
          {
            id: 14,
            title: 'Master Git and GitHub',
            subtitle: 'Udemy Certification',
            description: 'Version control mastery including branching, merging, and collaborative workflows.',
            image: '/img/unsplash/img-8.jpg'
          },
          {
            id: 15,
            title: 'ES6 JavaScript',
            subtitle: 'Udemy Certification',
            description: 'Modern JavaScript features including arrow functions, promises, async/await, and modules.',
            image: '/img/unsplash/img-9.jpg'
          },
          {
            id: 16,
            title: 'Advanced JavaScript',
            subtitle: 'Udemy Certification',
            description: 'Deep dive into closures, prototypes, event loops, and performance optimization.',
            image: '/img/unsplash/img-10.jpg'
          },
          {
            id: 17,
            title: 'HTML5 Essentials',
            subtitle: 'Udemy Certification',
            description: 'Semantic HTML5, multimedia APIs, and modern web standards.',
            image: '/img/unsplash/img-11.jpg'
          }
        ]
      },
      {
        title: 'Award-Winning: Education & Achievements',
        items: [
          {
            id: 18,
            title: 'B.E. in Electronics & Communication',
            subtitle: 'SJC Institute of Technology, VTU (2016 – 2020)',
            description: 'Graduated with CGPA 7.66. Strong foundation in engineering principles.',
            image: '/img/sjcit.png',
            isCertificate: true,
            fullDescription: 'Bachelor of Engineering in Electronics and Communication from SJC Institute of Technology, affiliated to Visvesvaraya Technological University (VTU), Bengaluru. Graduated with a CGPA of 7.66.',
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 19,
            title: 'SISA Spot Award',
            subtitle: 'Q3 FY 2025-26 • Feb 2026',
            description: 'Excellence in performance for the third quarter of fiscal year 2025-26.',
            image: '/img/IMG_7588.jpg',
            isCertificate: true,
            fullDescription: 'Awarded the SISA Spot Award for the third quarter of FY 2025-26 by CEO Dharshan Shanthamurthy for exceptional performance and dedication.',
            highlights: [
              'Awarded by Dharshan Shanthamurthy (CEO)',
              'Quarterly Excellence Recognition (Q3)',
              'Outstanding performance in cybersecurity projects'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 20,
            title: 'SISA Certificate of Appreciation',
            subtitle: 'Spot Award • April FY 2025-26',
            description: 'Recognized for receiving the "Spot Award" for exceptional contributions in April.',
            image: '/img/IMG_7589.jpg',
            isCertificate: true,
            fullDescription: 'Received a Certificate of Appreciation for the Spot Award in April FY 2025-26, recognizing consistent high-impact performance with SISA.',
            highlights: [
              'Monthly Spot Award Recognition',
              'Certificate of Appreciation for excellence',
              'Awarded by SISA Leadership'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 21,
            title: 'SISA Work Anniversary',
            subtitle: 'Growing with SISA • 2025',
            description: 'Celebrating a year of growth and high-quality work with SISA Information Security.',
            image: '/img/IMG_7587.jpg',
            isCertificate: true,
            fullDescription: 'Recognized by SISA for reaching a work anniversary and for consistent growth and good work within the cybersecurity domain.',
            highlights: [
              'Work Anniversary Recognition',
              'Acknowledged for consistent growth',
              'Contribution to forensic-driven cybersecurity'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 22,
            title: 'TCS Special Achievement Award',
            subtitle: 'Outstanding Contribution • Mar 2023',
            description: 'Recognized for outstanding contribution to the organization as an inspiring role model.',
            image: '/img/IMG_7582.jpg',
            isCertificate: true,
            fullDescription: 'Awarded the TCS Special Achievement Award in appreciation of outstanding contribution to the organization. Recognized as an inspiring role model to colleagues for dedication and commitment to excellence.',
            highlights: [
              'Awarded by Milind Lakkad (Executive VP & Global Head HR)',
              'Recognized for outstanding contribution to the organization',
              'Cited as an inspiring role model for colleagues'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 23,
            title: 'TCS Service and Commitment Award',
            subtitle: '3 Years of Dedicated Service • Dec 2024',
            description: 'Celebrating 3 years of dedicated service and commitment to Tata Consultancy Services.',
            image: '/img/IMG_7583.jpg',
            isCertificate: true,
            fullDescription: 'Awarded in recognition of 3 years of dedicated service to Tata Consultancy Services. This award celebrates long-term commitment and consistent performance within the organization.',
            highlights: [
              'Milestone: 3 Years of dedicated service',
              'Recognized for long-term organizational commitment',
              'Awarded on 23-Dec-2024'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 24,
            title: 'TCS On The Spot Award',
            subtitle: 'Innovation & Excellence • Apr 2024',
            description: 'Recognized for immediate excellence and role model behavior in project delivery.',
            image: '/img/IMG_7584.jpg',
            isCertificate: true,
            fullDescription: 'Awarded the "On The Spot Award" by TCS Gems in appreciation of outstanding contribution and for being an inspiring role model to colleagues.',
            highlights: [
              'Instant recognition for outstanding performance',
              'Awarded by Global Head of HR',
              'Recognized for role model behavior'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 25,
            title: 'TCS Learning Achievement Award',
            subtitle: 'Continuous Skill Mastery • Mar 2023',
            description: 'Recognized for exceptional commitment to continuous learning and skill development.',
            image: '/img/IMG_7585.jpg',
            isCertificate: true,
            fullDescription: 'Awarded the Learning Achievement Award by TCS Gems for demonstrating an outstanding commitment to continuous learning and upgrading technical expertise.',
            highlights: [
              'Recognized for continuous learning mindset',
              'Achievement in technical skill mastery',
              'Awarded on 23-Mar-2023'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 26,
            title: 'TCS Xcelerate Warrior',
            subtitle: 'Career Journey Milestone',
            description: 'Gaining this title kickstarts a journey towards achieving high professional aspirations.',
            image: '/img/IMG_7586.jpg',
            isCertificate: true,
            fullDescription: 'Achieved the title of "Xcelerate Warrior" within the TCS ecosystem, signifying a high-potential career trajectory and commitment to achieving professional goals.',
            highlights: [
              'Title: Xcelerate Warrior',
              'Recognized for career journey momentum',
              'Milestone in professional development'
            ],
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          },
          {
            id: 27,
            title: 'TCS "Star Performer" Award',
            subtitle: 'Innovation & Excellence Recognition',
            description: 'Recognized for outstanding innovation and consistent delivery across multiple projects.',
            image: '/img/unsplash/award.jpg',
            isCertificate: true,
            fullDescription: 'Awarded TCS "Star Performer" recognition for innovation and consistent high-quality delivery across multiple banking and payment projects.',
            video: this.CINEMATIC_VIDEO,
            audio: this.CINEMATIC_AUDIO
          }
        ]
      }
    ];
  }
}
